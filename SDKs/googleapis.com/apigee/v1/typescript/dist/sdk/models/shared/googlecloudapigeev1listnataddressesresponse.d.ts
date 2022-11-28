import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1NatAddress } from "./googlecloudapigeev1nataddress";
/**
 * Response for ListNatAddresses.
**/
export declare class GoogleCloudApigeeV1ListNatAddressesResponse extends SpeakeasyBase {
    natAddresses?: GoogleCloudApigeeV1NatAddress[];
    nextPageToken?: string;
}
