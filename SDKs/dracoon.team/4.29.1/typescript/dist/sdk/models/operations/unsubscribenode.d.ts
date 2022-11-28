import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeNodePathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class UnsubscribeNodeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UnsubscribeNodeRequest extends SpeakeasyBase {
    pathParams: UnsubscribeNodePathParams;
    headers: UnsubscribeNodeHeaders;
}
export declare class UnsubscribeNodeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
