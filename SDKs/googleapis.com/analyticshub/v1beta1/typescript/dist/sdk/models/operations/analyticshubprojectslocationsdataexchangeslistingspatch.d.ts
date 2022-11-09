import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsPatchPathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsPatchQueryParams;
    request?: shared.Listing;
    security: AnalyticshubProjectsLocationsDataExchangesListingsPatchSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsPatchResponse extends SpeakeasyBase {
    contentType: string;
    listing?: shared.Listing;
    statusCode: number;
}
