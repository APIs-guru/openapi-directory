import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ClearAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class ClearAddressRequest extends SpeakeasyBase {
    headers: ClearAddressHeaders;
    request: shared.ClearAddressRequest;
}
export declare class ClearAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    clearAddress?: shared.ClearAddress;
}
