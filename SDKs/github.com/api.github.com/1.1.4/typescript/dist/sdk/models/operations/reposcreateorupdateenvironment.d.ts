import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateOrUpdateEnvironmentPathParams extends SpeakeasyBase {
    environmentName: string;
    owner: string;
    repo: string;
}
export declare class ReposCreateOrUpdateEnvironmentRequestBodyReviewers extends SpeakeasyBase {
    id?: number;
    type?: shared.DeploymentReviewerTypeEnum;
}
export declare class ReposCreateOrUpdateEnvironmentRequestBody extends SpeakeasyBase {
    deploymentBranchPolicy?: shared.DeploymentBranchPolicy;
    reviewers?: ReposCreateOrUpdateEnvironmentRequestBodyReviewers[];
    waitTimer?: number;
}
export declare class ReposCreateOrUpdateEnvironmentRequest extends SpeakeasyBase {
    pathParams: ReposCreateOrUpdateEnvironmentPathParams;
    request?: ReposCreateOrUpdateEnvironmentRequestBody;
}
export declare class ReposCreateOrUpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    environment?: shared.Environment;
}
