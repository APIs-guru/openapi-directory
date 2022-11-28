import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListCommitsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListCommitsQueryParams extends SpeakeasyBase {
    author?: string;
    page?: number;
    path?: string;
    perPage?: number;
    sha?: string;
    since?: Date;
    until?: Date;
}
export declare class ReposListCommitsRequest extends SpeakeasyBase {
    pathParams: ReposListCommitsPathParams;
    queryParams: ReposListCommitsQueryParams;
}
export declare class ReposListCommitsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    commits?: shared.Commit[];
    scimError?: shared.ScimError;
}
