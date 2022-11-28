import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposRenameBranchPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposRenameBranchRequestBody extends SpeakeasyBase {
    newName: string;
}
export declare class ReposRenameBranchRequest extends SpeakeasyBase {
    pathParams: ReposRenameBranchPathParams;
    request?: ReposRenameBranchRequestBody;
}
export declare class ReposRenameBranchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    branchWithProtection?: shared.BranchWithProtection;
    validationError?: shared.ValidationError;
}
