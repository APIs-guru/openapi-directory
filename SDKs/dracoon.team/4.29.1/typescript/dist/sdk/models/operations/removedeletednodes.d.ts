import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveDeletedNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveDeletedNodesRequest extends SpeakeasyBase {
    headers: RemoveDeletedNodesHeaders;
    request: shared.DeleteDeletedNodesRequest;
}
export declare class RemoveDeletedNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
