import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    listingId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsCreatePathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsCreateQueryParams;
    request?: shared.Listing;
    security: AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    listing?: shared.Listing;
    statusCode: number;
}
