import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteCommitSignatureProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposDeleteCommitSignatureProtectionRequest extends SpeakeasyBase {
    pathParams: ReposDeleteCommitSignatureProtectionPathParams;
}
export declare class ReposDeleteCommitSignatureProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
