import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteAdminBranchProtectionPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposDeleteAdminBranchProtectionRequest extends SpeakeasyBase {
    pathParams: ReposDeleteAdminBranchProtectionPathParams;
}
export declare class ReposDeleteAdminBranchProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
