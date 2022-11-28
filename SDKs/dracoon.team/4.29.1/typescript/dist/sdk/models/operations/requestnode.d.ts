import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestNodePathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RequestNodeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestNodeRequest extends SpeakeasyBase {
    pathParams: RequestNodePathParams;
    headers: RequestNodeHeaders;
}
export declare class RequestNodeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
}
