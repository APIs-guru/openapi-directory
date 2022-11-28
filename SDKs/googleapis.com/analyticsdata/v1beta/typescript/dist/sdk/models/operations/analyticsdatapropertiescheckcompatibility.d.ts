import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AnalyticsdataPropertiesCheckCompatibilityPathParams extends SpeakeasyBase {
    property: string;
}
export declare class AnalyticsdataPropertiesCheckCompatibilityQueryParams extends SpeakeasyBase {
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
export declare class AnalyticsdataPropertiesCheckCompatibilitySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesCheckCompatibilitySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AnalyticsdataPropertiesCheckCompatibilitySecurity extends SpeakeasyBase {
    option1?: AnalyticsdataPropertiesCheckCompatibilitySecurityOption1;
    option2?: AnalyticsdataPropertiesCheckCompatibilitySecurityOption2;
}
export declare class AnalyticsdataPropertiesCheckCompatibilityRequest extends SpeakeasyBase {
    pathParams: AnalyticsdataPropertiesCheckCompatibilityPathParams;
    queryParams: AnalyticsdataPropertiesCheckCompatibilityQueryParams;
    request?: shared.CheckCompatibilityRequest;
    security: AnalyticsdataPropertiesCheckCompatibilitySecurity;
}
export declare class AnalyticsdataPropertiesCheckCompatibilityResponse extends SpeakeasyBase {
    checkCompatibilityResponse?: shared.CheckCompatibilityResponse;
    contentType: string;
    statusCode: number;
}
