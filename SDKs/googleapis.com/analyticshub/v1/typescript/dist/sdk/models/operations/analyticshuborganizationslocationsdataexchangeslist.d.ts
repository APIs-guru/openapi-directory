import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticshubOrganizationsLocationsDataExchangesListPathParams extends SpeakeasyBase {
    organization: string;
}
export declare class AnalyticshubOrganizationsLocationsDataExchangesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubOrganizationsLocationsDataExchangesListSecurity extends SpeakeasyBase {
    option1?: AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1;
    option2?: AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2;
}
export declare class AnalyticshubOrganizationsLocationsDataExchangesListRequest extends SpeakeasyBase {
    pathParams: AnalyticshubOrganizationsLocationsDataExchangesListPathParams;
    queryParams: AnalyticshubOrganizationsLocationsDataExchangesListQueryParams;
    security: AnalyticshubOrganizationsLocationsDataExchangesListSecurity;
}
export declare class AnalyticshubOrganizationsLocationsDataExchangesListResponse extends SpeakeasyBase {
    contentType: string;
    listOrgDataExchangesResponse?: shared.ListOrgDataExchangesResponse;
    statusCode: number;
}
