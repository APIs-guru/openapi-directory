import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeUploadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SubscribeUploadSharesRequest extends SpeakeasyBase {
    headers: SubscribeUploadSharesHeaders;
    request: shared.UpdateSubscriptionsBulkRequest;
}
export declare class SubscribeUploadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
