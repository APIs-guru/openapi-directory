import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsUndeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsModelsUndeployQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsUndeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsUndeployRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsUndeployPathParams;
    queryParams: AutomlProjectsLocationsModelsUndeployQueryParams;
    request?: Map<string, any>;
    security: AutomlProjectsLocationsModelsUndeploySecurity;
}
export declare class AutomlProjectsLocationsModelsUndeployResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
