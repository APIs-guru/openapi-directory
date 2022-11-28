import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetAccessRestrictionsPathParams extends SpeakeasyBase {
    branch: string;
    owner: string;
    repo: string;
}
export declare class ReposGetAccessRestrictionsRequest extends SpeakeasyBase {
    pathParams: ReposGetAccessRestrictionsPathParams;
}
export declare class ReposGetAccessRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    branchRestrictionPolicy?: shared.BranchRestrictionPolicy;
}
