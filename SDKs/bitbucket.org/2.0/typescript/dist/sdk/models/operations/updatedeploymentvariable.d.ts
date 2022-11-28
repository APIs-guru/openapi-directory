import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeploymentVariablePathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class UpdateDeploymentVariableRequest extends SpeakeasyBase {
    pathParams: UpdateDeploymentVariablePathParams;
    request: Map<string, any>;
}
export declare class UpdateDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deploymentVariable?: Map<string, any>;
    error?: Map<string, any>;
}
