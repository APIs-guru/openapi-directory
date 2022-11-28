import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDeploymentVariablePathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    workspace: string;
}
export declare class CreateDeploymentVariableQueryParams extends SpeakeasyBase {
    variableUuid: string;
}
export declare class CreateDeploymentVariableRequest extends SpeakeasyBase {
    pathParams: CreateDeploymentVariablePathParams;
    queryParams: CreateDeploymentVariableQueryParams;
    request: Map<string, any>;
}
export declare class CreateDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deploymentVariable?: Map<string, any>;
    error?: Map<string, any>;
}
