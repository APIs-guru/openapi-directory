import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveNodesPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class MoveNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class MoveNodesRequest extends SpeakeasyBase {
    pathParams: MoveNodesPathParams;
    headers: MoveNodesHeaders;
    request: shared.MoveNodesRequest;
}
export declare class MoveNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
    moveNodes204ApplicationJsonString?: string;
}
