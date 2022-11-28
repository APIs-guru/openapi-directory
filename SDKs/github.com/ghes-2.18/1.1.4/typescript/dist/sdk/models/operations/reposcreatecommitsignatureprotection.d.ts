import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateCommitSignatureProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposCreateCommitSignatureProtectionRequest extends SpeakeasyBase {
    pathParams: ReposCreateCommitSignatureProtectionPathParams;
}
export declare class ReposCreateCommitSignatureProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
