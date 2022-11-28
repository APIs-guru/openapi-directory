import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetTeamsWithAccessToProtectedBranchPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetTeamsWithAccessToProtectedBranchRequest extends SpeakeasyBase {
    pathParams: ReposGetTeamsWithAccessToProtectedBranchPathParams;
}
export declare class ReposGetTeamsWithAccessToProtectedBranchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    teams?: shared.Team[];
}
