import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsListSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsListSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsListPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsListQueryParams;
    security: AnalyticshubProjectsLocationsDataExchangesListingsListSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsListResponse extends SpeakeasyBase {
    contentType: string;
    listListingsResponse?: shared.ListListingsResponse;
    statusCode: number;
}
