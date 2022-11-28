import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyNodesPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class CopyNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CopyNodesRequest extends SpeakeasyBase {
    pathParams: CopyNodesPathParams;
    headers: CopyNodesHeaders;
    request: shared.CopyNodesRequest;
}
export declare class CopyNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    node?: shared.Node;
    statusCode: number;
    copyNodes204ApplicationJsonString?: string;
}
