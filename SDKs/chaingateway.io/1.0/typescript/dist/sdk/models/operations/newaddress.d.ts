import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NewAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class NewAddressRequest extends SpeakeasyBase {
    headers: NewAddressHeaders;
    request: shared.NewAddressRequest;
}
export declare class NewAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    newAddress?: shared.NewAddress;
}
