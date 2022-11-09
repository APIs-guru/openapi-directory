import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactInfo
/** 
 * Contact details for managed Google Play enterprises.
**/
export class ContactInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=dataProtectionOfficerEmail" })
  dataProtectionOfficerEmail?: string;

  @Metadata({ data: "json, name=dataProtectionOfficerName" })
  dataProtectionOfficerName?: string;

  @Metadata({ data: "json, name=dataProtectionOfficerPhone" })
  dataProtectionOfficerPhone?: string;

  @Metadata({ data: "json, name=euRepresentativeEmail" })
  euRepresentativeEmail?: string;

  @Metadata({ data: "json, name=euRepresentativeName" })
  euRepresentativeName?: string;

  @Metadata({ data: "json, name=euRepresentativePhone" })
  euRepresentativePhone?: string;
}
