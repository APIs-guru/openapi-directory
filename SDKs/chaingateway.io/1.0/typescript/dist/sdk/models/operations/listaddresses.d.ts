import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAddressesHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class ListAddressesRequest extends SpeakeasyBase {
    headers: ListAddressesHeaders;
}
export declare class ListAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listAddresses?: shared.ListAddresses;
}
