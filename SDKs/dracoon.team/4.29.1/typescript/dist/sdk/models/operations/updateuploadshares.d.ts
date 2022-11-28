import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUploadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateUploadSharesRequest extends SpeakeasyBase {
    headers: UpdateUploadSharesHeaders;
    request: shared.UpdateUploadSharesBulkRequest;
}
export declare class UpdateUploadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
