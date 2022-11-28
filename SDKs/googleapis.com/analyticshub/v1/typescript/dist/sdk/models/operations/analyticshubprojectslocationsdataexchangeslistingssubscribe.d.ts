import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribePathParams extends SpeakeasyBase {
    name: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribeQueryParams extends SpeakeasyBase {
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
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribeSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesListingsSubscribeSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesListingsSubscribeSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribeRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesListingsSubscribePathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesListingsSubscribeQueryParams;
    request?: shared.SubscribeListingRequest;
    security: AnalyticshubProjectsLocationsDataExchangesListingsSubscribeSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesListingsSubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscribeListingResponse?: Map<string, any>;
}
