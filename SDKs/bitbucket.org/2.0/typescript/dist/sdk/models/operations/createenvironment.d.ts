import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEnvironmentPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    pathParams: CreateEnvironmentPathParams;
    request: Map<string, any>;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    deploymentEnvironment?: Map<string, any>;
    error?: Map<string, any>;
}
