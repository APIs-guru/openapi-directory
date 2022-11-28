import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GitGetAllRefsPathParams extends SpeakeasyBase {
    namespace: string;
    owner: string;
    repo: string;
}
export declare class GitGetAllRefsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GitGetAllRefsRequest extends SpeakeasyBase {
    pathParams: GitGetAllRefsPathParams;
    queryParams: GitGetAllRefsQueryParams;
}
export declare class GitGetAllRefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gitRefs?: shared.GitRef[];
}
