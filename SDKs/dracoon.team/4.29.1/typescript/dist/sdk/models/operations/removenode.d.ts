import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveNodePathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class RemoveNodeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveNodeRequest extends SpeakeasyBase {
    pathParams: RemoveNodePathParams;
    headers: RemoveNodeHeaders;
}
export declare class RemoveNodeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
