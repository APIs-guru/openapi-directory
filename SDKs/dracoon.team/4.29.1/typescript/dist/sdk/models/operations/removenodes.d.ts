import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveNodesRequest extends SpeakeasyBase {
    headers: RemoveNodesHeaders;
    request: shared.DeleteNodesRequest;
}
export declare class RemoveNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
