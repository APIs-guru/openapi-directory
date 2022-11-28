import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetBranchProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetBranchProtectionRequest extends SpeakeasyBase {
    pathParams: ReposGetBranchProtectionPathParams;
}
export declare class ReposGetBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    branchProtection?: shared.BranchProtection;
}
