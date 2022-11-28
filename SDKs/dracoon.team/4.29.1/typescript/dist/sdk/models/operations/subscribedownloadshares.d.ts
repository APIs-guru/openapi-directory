import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SubscribeDownloadSharesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class SubscribeDownloadSharesRequest extends SpeakeasyBase {
    headers: SubscribeDownloadSharesHeaders;
    request: shared.UpdateSubscriptionsBulkRequest;
}
export declare class SubscribeDownloadSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
