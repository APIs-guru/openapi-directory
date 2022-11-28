import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSubscribedAddressesHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class ListSubscribedAddressesRequest extends SpeakeasyBase {
    headers: ListSubscribedAddressesHeaders;
}
export declare class ListSubscribedAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listSubscribedAddresses?: shared.ListSubscribedAddresses;
}
