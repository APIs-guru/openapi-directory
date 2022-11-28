import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDeploymentVariablePathParams extends SpeakeasyBase {
    environmentUuid: string;
    repoSlug: string;
    variableUuid: string;
    workspace: string;
}
export declare class DeleteDeploymentVariableRequest extends SpeakeasyBase {
    pathParams: DeleteDeploymentVariablePathParams;
}
export declare class DeleteDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
