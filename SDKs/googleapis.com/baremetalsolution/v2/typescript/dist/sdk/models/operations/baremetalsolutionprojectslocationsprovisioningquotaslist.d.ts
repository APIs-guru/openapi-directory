import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsProvisioningQuotasListPathParams;
    queryParams: BaremetalsolutionProjectsLocationsProvisioningQuotasListQueryParams;
    security: BaremetalsolutionProjectsLocationsProvisioningQuotasListSecurity;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningQuotasListResponse extends SpeakeasyBase {
    contentType: string;
    listProvisioningQuotasResponse?: shared.ListProvisioningQuotasResponse;
    statusCode: number;
}
