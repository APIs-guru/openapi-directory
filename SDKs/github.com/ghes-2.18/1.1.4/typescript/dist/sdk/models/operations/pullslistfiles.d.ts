import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PullsListFilesPathParams extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsListFilesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class PullsListFilesRequest extends SpeakeasyBase {
    pathParams: PullsListFilesPathParams;
    queryParams: PullsListFilesQueryParams;
}
export declare class PullsListFilesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    diffEntries?: shared.DiffEntry[];
    validationError?: shared.ValidationError;
}
