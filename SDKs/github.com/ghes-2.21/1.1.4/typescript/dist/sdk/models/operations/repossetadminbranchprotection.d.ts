import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposSetAdminBranchProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposSetAdminBranchProtectionRequest extends SpeakeasyBase {
    pathParams: ReposSetAdminBranchProtectionPathParams;
}
export declare class ReposSetAdminBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protectedBranchAdminEnforced?: shared.ProtectedBranchAdminEnforced;
}
