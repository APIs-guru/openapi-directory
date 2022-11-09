import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpOrganizationDetails
/** 
 * Provides information about an internet provider.
**/
export class IpOrganizationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Asn" })
  asn?: number;

  @Metadata({ data: "json, name=AsnOrg" })
  asnOrg?: string;

  @Metadata({ data: "json, name=Isp" })
  isp?: string;

  @Metadata({ data: "json, name=Org" })
  org?: string;
}
