import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestNodeCommentsPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RequestNodeCommentsQueryParams extends SpeakeasyBase {
    hideDeleted?: boolean;
    limit?: number;
    offset?: number;
}
export declare class RequestNodeCommentsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestNodeCommentsRequest extends SpeakeasyBase {
    pathParams: RequestNodeCommentsPathParams;
    queryParams: RequestNodeCommentsQueryParams;
    headers: RequestNodeCommentsHeaders;
}
export declare class RequestNodeCommentsResponse extends SpeakeasyBase {
    commentList?: shared.CommentList;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
