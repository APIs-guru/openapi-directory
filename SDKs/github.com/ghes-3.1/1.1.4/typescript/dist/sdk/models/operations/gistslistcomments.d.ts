import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListCommentsPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsListCommentsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GistsListCommentsRequest extends SpeakeasyBase {
    pathParams: GistsListCommentsPathParams;
    queryParams: GistsListCommentsQueryParams;
}
export declare class GistsListCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gistComments?: shared.GistComment[];
}
