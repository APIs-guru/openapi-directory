import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetUsersWithAccessToProtectedBranchPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetUsersWithAccessToProtectedBranchRequest extends SpeakeasyBase {
    pathParams: ReposGetUsersWithAccessToProtectedBranchPathParams;
}
export declare class ReposGetUsersWithAccessToProtectedBranchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    simpleUsers?: shared.SimpleUser[];
}
