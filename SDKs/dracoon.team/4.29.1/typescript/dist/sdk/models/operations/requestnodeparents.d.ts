import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestNodeParentsPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RequestNodeParentsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestNodeParentsRequest extends SpeakeasyBase {
    pathParams: RequestNodeParentsPathParams;
    headers: RequestNodeParentsHeaders;
}
export declare class RequestNodeParentsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    nodeParentList?: shared.NodeParentList;
    statusCode: number;
}
