import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsApisDeploymentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    apiDeploymentId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsCreateRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsApisDeploymentsCreatePathParams;
    queryParams: ApigeeregistryProjectsLocationsApisDeploymentsCreateQueryParams;
    request?: shared.ApiDeploymentInput;
    security: ApigeeregistryProjectsLocationsApisDeploymentsCreateSecurity;
}
export declare class ApigeeregistryProjectsLocationsApisDeploymentsCreateResponse extends SpeakeasyBase {
    apiDeployment?: shared.ApiDeployment;
    contentType: string;
    statusCode: number;
}
