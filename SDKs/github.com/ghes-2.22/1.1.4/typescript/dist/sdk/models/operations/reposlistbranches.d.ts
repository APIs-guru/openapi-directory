import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListBranchesPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListBranchesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    protected?: boolean;
}
export declare class ReposListBranchesRequest extends SpeakeasyBase {
    pathParams: ReposListBranchesPathParams;
    queryParams: ReposListBranchesQueryParams;
}
export declare class ReposListBranchesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    shortBranches?: shared.ShortBranch[];
}
