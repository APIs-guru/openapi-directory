import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpOwner
/** 
 * Provides information about the registered owner of an IP address.
**/
export class IpOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asn" })
  asn?: string;

  @SpeakeasyMetadata({ data: "json, name=asnOrg" })
  asnOrg?: string;

  @SpeakeasyMetadata({ data: "json, name=isp" })
  isp?: string;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;
}
