import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpOrganizationDetails
/** 
 * Provides information about an internet provider.
**/
export class IpOrganizationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Asn" })
  asn?: number;

  @SpeakeasyMetadata({ data: "json, name=AsnOrg" })
  asnOrg?: string;

  @SpeakeasyMetadata({ data: "json, name=Isp" })
  isp?: string;

  @SpeakeasyMetadata({ data: "json, name=Org" })
  org?: string;
}
