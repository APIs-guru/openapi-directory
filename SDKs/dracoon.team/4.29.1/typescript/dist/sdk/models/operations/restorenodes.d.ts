import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RestoreNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RestoreNodesRequest extends SpeakeasyBase {
    headers: RestoreNodesHeaders;
    request: shared.RestoreDeletedNodesRequest;
}
export declare class RestoreNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
