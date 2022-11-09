import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactTypeEnum } from "./contacttypeenum";
import { CountryCodeEnum } from "./countrycodeenum";
import { ExtraParam } from "./extraparam";


// ContactDetail
/** 
 * ContactDetail includes the following elements.
**/
export class ContactDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=AddressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=ContactType" })
  contactType?: ContactTypeEnum;

  @Metadata({ data: "json, name=CountryCode" })
  countryCode?: CountryCodeEnum;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=ExtraParams", elemType: shared.ExtraParam })
  extraParams?: ExtraParam[];

  @Metadata({ data: "json, name=Fax" })
  fax?: string;

  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=OrganizationName" })
  organizationName?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}
