import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetBranchPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetBranch415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposGetBranchRequest extends SpeakeasyBase {
    pathParams: ReposGetBranchPathParams;
}
export declare class ReposGetBranchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    branchWithProtection?: shared.BranchWithProtection;
    reposGetBranch415ApplicationJsonObject?: ReposGetBranch415ApplicationJson;
}
