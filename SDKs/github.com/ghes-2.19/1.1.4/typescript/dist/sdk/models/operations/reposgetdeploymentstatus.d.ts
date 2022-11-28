import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetDeploymentStatusPathParams extends SpeakeasyBase {
    deploymentId: number;
    owner: string;
    repo: string;
    statusId: number;
}
export declare class ReposGetDeploymentStatus415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposGetDeploymentStatusRequest extends SpeakeasyBase {
    pathParams: ReposGetDeploymentStatusPathParams;
}
export declare class ReposGetDeploymentStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    deploymentStatus?: shared.DeploymentStatus;
    reposGetDeploymentStatus415ApplicationJsonObject?: ReposGetDeploymentStatus415ApplicationJson;
}
