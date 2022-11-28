import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitListMatchingRefsPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class GitListMatchingRefsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GitListMatchingRefsRequest extends SpeakeasyBase {
    pathParams: GitListMatchingRefsPathParams;
    queryParams: GitListMatchingRefsQueryParams;
}
export declare class GitListMatchingRefsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    gitRefs?: shared.GitRef[];
}
