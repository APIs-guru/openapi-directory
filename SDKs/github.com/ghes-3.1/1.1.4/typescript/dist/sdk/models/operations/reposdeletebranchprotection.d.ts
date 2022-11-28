import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteBranchProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposDeleteBranchProtectionRequest extends SpeakeasyBase {
    pathParams: ReposDeleteBranchProtectionPathParams;
}
export declare class ReposDeleteBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
