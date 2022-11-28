import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsBatchPredictPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsModelsBatchPredictQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsBatchPredictSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsBatchPredictRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsBatchPredictPathParams;
    queryParams: AutomlProjectsLocationsModelsBatchPredictQueryParams;
    request?: shared.BatchPredictRequest;
    security: AutomlProjectsLocationsModelsBatchPredictSecurity;
}
export declare class AutomlProjectsLocationsModelsBatchPredictResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
