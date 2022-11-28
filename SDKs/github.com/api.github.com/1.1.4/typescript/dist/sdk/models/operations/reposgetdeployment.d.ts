import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetDeploymentPathParams extends SpeakeasyBase {
    deploymentId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetDeploymentRequest extends SpeakeasyBase {
    pathParams: ReposGetDeploymentPathParams;
}
export declare class ReposGetDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    deployment?: shared.Deployment;
}
