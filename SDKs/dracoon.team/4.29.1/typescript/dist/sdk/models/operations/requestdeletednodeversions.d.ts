import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestDeletedNodeVersionsPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RequestDeletedNodeVersionsQueryParams extends SpeakeasyBase {
    limit?: number;
    name: string;
    offset?: number;
    sort?: string;
    type: string;
}
export declare class RequestDeletedNodeVersionsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestDeletedNodeVersionsRequest extends SpeakeasyBase {
    pathParams: RequestDeletedNodeVersionsPathParams;
    queryParams: RequestDeletedNodeVersionsQueryParams;
    headers: RequestDeletedNodeVersionsHeaders;
}
export declare class RequestDeletedNodeVersionsResponse extends SpeakeasyBase {
    contentType: string;
    deletedNodeVersionsList?: shared.DeletedNodeVersionsList;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
