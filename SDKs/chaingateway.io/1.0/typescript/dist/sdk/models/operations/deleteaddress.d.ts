import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class DeleteAddressRequest extends SpeakeasyBase {
    headers: DeleteAddressHeaders;
    request: shared.DeleteAddressRequest;
}
export declare class DeleteAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteAddress?: shared.DeleteAddress;
}
