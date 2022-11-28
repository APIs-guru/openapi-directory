import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetCommitSignatureProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetCommitSignatureProtectionRequest extends SpeakeasyBase {
    pathParams: ReposGetCommitSignatureProtectionPathParams;
}
export declare class ReposGetCommitSignatureProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
