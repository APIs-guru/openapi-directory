import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNodeSubscriptionsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class UpdateNodeSubscriptionsRequest extends SpeakeasyBase {
    headers: UpdateNodeSubscriptionsHeaders;
    request: shared.UpdateSubscriptionsBulkRequest;
}
export declare class UpdateNodeSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
