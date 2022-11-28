import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1NatAddress } from "./googlecloudapigeev1nataddress";



// GoogleCloudApigeeV1ListNatAddressesResponse
/** 
 * Response for ListNatAddresses.
**/
export class GoogleCloudApigeeV1ListNatAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=natAddresses", elemType: GoogleCloudApigeeV1NatAddress })
  natAddresses?: GoogleCloudApigeeV1NatAddress[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
