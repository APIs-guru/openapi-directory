import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubProjectsLocationsDataExchangesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListQueryParams;
    security: AnalyticshubProjectsLocationsDataExchangesListSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListResponse extends SpeakeasyBase {
    contentType: string;
    listDataExchangesResponse?: shared.ListDataExchangesResponse;
    statusCode: number;
}
