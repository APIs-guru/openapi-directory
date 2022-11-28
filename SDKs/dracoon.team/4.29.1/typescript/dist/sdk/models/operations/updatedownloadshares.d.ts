import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDownloadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateDownloadSharesRequest extends SpeakeasyBase {
    headers: UpdateDownloadSharesHeaders;
    request: shared.UpdateDownloadSharesBulkRequest;
}
export declare class UpdateDownloadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
