import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestDeletedNodePathParams extends SpeakeasyBase {
    deletedNodeId: number;
}
export declare class RequestDeletedNodeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestDeletedNodeRequest extends SpeakeasyBase {
    pathParams: RequestDeletedNodePathParams;
    headers: RequestDeletedNodeHeaders;
}
export declare class RequestDeletedNodeResponse extends SpeakeasyBase {
    contentType: string;
    deletedNode?: shared.DeletedNode;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
