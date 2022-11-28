import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListBranchesForHeadCommitPathParams extends SpeakeasyBase {
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class ReposListBranchesForHeadCommit415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposListBranchesForHeadCommitRequest extends SpeakeasyBase {
    pathParams: ReposListBranchesForHeadCommitPathParams;
}
export declare class ReposListBranchesForHeadCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchShorts?: shared.BranchShort[];
    reposListBranchesForHeadCommit415ApplicationJsonObject?: ReposListBranchesForHeadCommit415ApplicationJson;
    validationError?: shared.ValidationError;
}
