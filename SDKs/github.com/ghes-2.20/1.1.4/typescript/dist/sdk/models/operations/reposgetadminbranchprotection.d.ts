import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetAdminBranchProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetAdminBranchProtectionRequest extends SpeakeasyBase {
    pathParams: ReposGetAdminBranchProtectionPathParams;
}
export declare class ReposGetAdminBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
