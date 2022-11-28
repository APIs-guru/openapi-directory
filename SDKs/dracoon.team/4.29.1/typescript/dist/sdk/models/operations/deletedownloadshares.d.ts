import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDownloadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class DeleteDownloadSharesRequest extends SpeakeasyBase {
    headers: DeleteDownloadSharesHeaders;
    request: shared.DeleteDownloadSharesRequest;
}
export declare class DeleteDownloadSharesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
