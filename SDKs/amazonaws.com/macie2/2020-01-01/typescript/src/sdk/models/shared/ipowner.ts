import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpOwner
/** 
 * Provides information about the registered owner of an IP address.
**/
export class IpOwner extends SpeakeasyBase {
  @Metadata({ data: "json, name=asn" })
  asn?: string;

  @Metadata({ data: "json, name=asnOrg" })
  asnOrg?: string;

  @Metadata({ data: "json, name=isp" })
  isp?: string;

  @Metadata({ data: "json, name=org" })
  org?: string;
}
