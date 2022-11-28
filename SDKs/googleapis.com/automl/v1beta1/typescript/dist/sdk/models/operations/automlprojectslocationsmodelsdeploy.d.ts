import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsDeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AutomlProjectsLocationsModelsDeployQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsDeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsDeployRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsDeployPathParams;
    queryParams: AutomlProjectsLocationsModelsDeployQueryParams;
    request?: shared.DeployModelRequest;
    security: AutomlProjectsLocationsModelsDeploySecurity;
}
export declare class AutomlProjectsLocationsModelsDeployResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
