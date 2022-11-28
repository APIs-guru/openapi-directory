import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsGetSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsGetPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsGetQueryParams;
    security: AnalyticshubProjectsLocationsDataExchangesListingsGetSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsGetResponse extends SpeakeasyBase {
    contentType: string;
    listing?: shared.Listing;
    statusCode: number;
}
