import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsProvisioningQuotasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsProvisioningQuotasListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsProvisioningQuotasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsProvisioningQuotasListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsProvisioningQuotasListPathParams;
    queryParams: BaremetalsolutionProjectsProvisioningQuotasListQueryParams;
    security: BaremetalsolutionProjectsProvisioningQuotasListSecurity;
}
export declare class BaremetalsolutionProjectsProvisioningQuotasListResponse extends SpeakeasyBase {
    contentType: string;
    listProvisioningQuotasResponse?: shared.ListProvisioningQuotasResponse;
    statusCode: number;
}
