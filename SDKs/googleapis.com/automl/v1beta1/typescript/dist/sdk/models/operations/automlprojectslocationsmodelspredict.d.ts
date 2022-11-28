import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsPredictPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsModelsPredictQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsPredictSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsPredictRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsPredictPathParams;
    queryParams: AutomlProjectsLocationsModelsPredictQueryParams;
    request?: shared.PredictRequest;
    security: AutomlProjectsLocationsModelsPredictSecurity;
}
export declare class AutomlProjectsLocationsModelsPredictResponse extends SpeakeasyBase {
    contentType: string;
    predictResponse?: shared.PredictResponse;
    statusCode: number;
}
