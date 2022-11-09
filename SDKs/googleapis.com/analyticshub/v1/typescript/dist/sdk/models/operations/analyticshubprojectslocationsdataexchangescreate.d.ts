import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AnalyticshubProjectsLocationsDataExchangesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataExchangeId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticshubProjectsLocationsDataExchangesCreateSecurity extends SpeakeasyBase {
    option1?: AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1;
    option2?: AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2;
}
export declare class AnalyticshubProjectsLocationsDataExchangesCreateRequest extends SpeakeasyBase {
    pathParams: AnalyticshubProjectsLocationsDataExchangesCreatePathParams;
    queryParams: AnalyticshubProjectsLocationsDataExchangesCreateQueryParams;
    request?: shared.DataExchange;
    security: AnalyticshubProjectsLocationsDataExchangesCreateSecurity;
}
export declare class AnalyticshubProjectsLocationsDataExchangesCreateResponse extends SpeakeasyBase {
    contentType: string;
    dataExchange?: shared.DataExchange;
    statusCode: number;
}
