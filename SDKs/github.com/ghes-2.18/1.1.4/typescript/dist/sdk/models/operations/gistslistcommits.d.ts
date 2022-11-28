import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListCommitsPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsListCommitsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GistsListCommitsRequest extends SpeakeasyBase {
    pathParams: GistsListCommitsPathParams;
    queryParams: GistsListCommitsQueryParams;
}
export declare class GistsListCommitsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gistCommits?: shared.GistCommit[];
}
