import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUploadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class DeleteUploadSharesRequest extends SpeakeasyBase {
    headers: DeleteUploadSharesHeaders;
    request: shared.DeleteUploadSharesRequest;
}
export declare class DeleteUploadSharesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
