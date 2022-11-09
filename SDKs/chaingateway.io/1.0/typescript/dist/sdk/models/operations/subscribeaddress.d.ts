import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SubscribeAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class SubscribeAddressRequest extends SpeakeasyBase {
    headers: SubscribeAddressHeaders;
    request: shared.SubscribeAddressRequest;
}
export declare class SubscribeAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscribeAddress?: shared.SubscribeAddress;
}
