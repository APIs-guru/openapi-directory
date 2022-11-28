import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmptyDeletedNodesPathParams extends SpeakeasyBase {
    nodeId: number;
}
export declare class EmptyDeletedNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class EmptyDeletedNodesRequest extends SpeakeasyBase {
    pathParams: EmptyDeletedNodesPathParams;
    headers: EmptyDeletedNodesHeaders;
}
export declare class EmptyDeletedNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
