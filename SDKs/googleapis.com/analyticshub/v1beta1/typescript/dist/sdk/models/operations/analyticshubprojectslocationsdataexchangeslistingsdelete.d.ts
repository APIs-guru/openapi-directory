import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeleteRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsDeletePathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsDeleteQueryParams;
    security: AnalyticshubProjectsLocationsDataExchangesListingsDeleteSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
