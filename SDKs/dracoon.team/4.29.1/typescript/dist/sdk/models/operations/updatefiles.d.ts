import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateFilesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateFilesRequest extends SpeakeasyBase {
    headers: UpdateFilesHeaders;
    request: shared.UpdateFilesBulkRequest;
}
export declare class UpdateFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
