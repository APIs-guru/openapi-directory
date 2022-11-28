import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeNodePathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class SubscribeNodeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SubscribeNodeRequest extends SpeakeasyBase {
    pathParams: SubscribeNodePathParams;
    headers: SubscribeNodeHeaders;
}
export declare class SubscribeNodeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    subscribedNode?: shared.SubscribedNode;
}
