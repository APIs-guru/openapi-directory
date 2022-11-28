import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactInfo
/** 
 * Contact details for managed Google Play enterprises.
**/
export class ContactInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=dataProtectionOfficerEmail" })
  dataProtectionOfficerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=dataProtectionOfficerName" })
  dataProtectionOfficerName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataProtectionOfficerPhone" })
  dataProtectionOfficerPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=euRepresentativeEmail" })
  euRepresentativeEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=euRepresentativeName" })
  euRepresentativeName?: string;

  @SpeakeasyMetadata({ data: "json, name=euRepresentativePhone" })
  euRepresentativePhone?: string;
}
