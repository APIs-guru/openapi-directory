import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1NatAddress } from "./googlecloudapigeev1nataddress";


// GoogleCloudApigeeV1ListNatAddressesResponse
/** 
 * Response for ListNatAddresses.
**/
export class GoogleCloudApigeeV1ListNatAddressesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=natAddresses", elemType: shared.GoogleCloudApigeeV1NatAddress })
  natAddresses?: GoogleCloudApigeeV1NatAddress[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
