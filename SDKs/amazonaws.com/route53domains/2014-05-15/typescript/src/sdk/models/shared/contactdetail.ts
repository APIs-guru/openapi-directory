import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
import { CountryCodeEnum } from "./countrycodeenum";
import { ExtraParam } from "./extraparam";



// ContactDetail
/** 
 * ContactDetail includes the following elements.
**/
export class ContactDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=AddressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactType" })
  contactType?: ContactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CountryCode" })
  countryCode?: CountryCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtraParams", elemType: ExtraParam })
  extraParams?: ExtraParam[];

  @SpeakeasyMetadata({ data: "json, name=Fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationName" })
  organizationName?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipCode" })
  zipCode?: string;
}
