import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeletePullRequestReviewProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposDeletePullRequestReviewProtectionRequest extends SpeakeasyBase {
    pathParams: ReposDeletePullRequestReviewProtectionPathParams;
}
export declare class ReposDeletePullRequestReviewProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
