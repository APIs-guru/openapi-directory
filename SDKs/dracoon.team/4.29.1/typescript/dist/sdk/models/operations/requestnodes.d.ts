import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestNodesQueryParams extends SpeakeasyBase {
    depthLevel?: number;
    filter?: string;
    limit?: number;
    offset?: number;
    parentId?: number;
    roomManager?: boolean;
    sort?: string;
}
export declare class RequestNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestNodesRequest extends SpeakeasyBase {
    queryParams: RequestNodesQueryParams;
    headers: RequestNodesHeaders;
}
export declare class RequestNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    nodeList?: shared.NodeList;
    statusCode: number;
}
