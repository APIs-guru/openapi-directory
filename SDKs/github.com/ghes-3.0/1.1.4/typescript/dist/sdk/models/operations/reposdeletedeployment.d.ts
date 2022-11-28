import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteDeploymentPathParams extends SpeakeasyBase {
    deploymentId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteDeploymentRequest extends SpeakeasyBase {
    pathParams: ReposDeleteDeploymentPathParams;
}
export declare class ReposDeleteDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
