import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestDeletedNodesSummaryPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RequestDeletedNodesSummaryQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestDeletedNodesSummaryHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestDeletedNodesSummaryRequest extends SpeakeasyBase {
    pathParams: RequestDeletedNodesSummaryPathParams;
    queryParams: RequestDeletedNodesSummaryQueryParams;
    headers: RequestDeletedNodesSummaryHeaders;
}
export declare class RequestDeletedNodesSummaryResponse extends SpeakeasyBase {
    contentType: string;
    deletedNodeSummaryList?: shared.DeletedNodeSummaryList;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
