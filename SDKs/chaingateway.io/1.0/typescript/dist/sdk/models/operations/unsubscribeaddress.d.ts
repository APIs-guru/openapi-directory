import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnsubscribeAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class UnsubscribeAddressRequest extends SpeakeasyBase {
    headers: UnsubscribeAddressHeaders;
    request: shared.UnsubscribeAddressRequest;
}
export declare class UnsubscribeAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unsubscribeAddress?: shared.UnsubscribeAddress;
}
