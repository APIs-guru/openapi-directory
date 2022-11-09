import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StateElectionOfficeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_line1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax_number" })
  faxNumber?: string;

  @Metadata({ data: "json, name=mailing_address1" })
  mailingAddress1?: string;

  @Metadata({ data: "json, name=mailing_address2" })
  mailingAddress2?: string;

  @Metadata({ data: "json, name=mailing_city" })
  mailingCity?: string;

  @Metadata({ data: "json, name=mailing_state" })
  mailingState?: string;

  @Metadata({ data: "json, name=mailing_zipcode" })
  mailingZipcode?: string;

  @Metadata({ data: "json, name=office_name" })
  officeName?: string;

  @Metadata({ data: "json, name=office_type" })
  officeType: string;

  @Metadata({ data: "json, name=primary_phone_number" })
  primaryPhoneNumber?: string;

  @Metadata({ data: "json, name=secondary_phone_number" })
  secondaryPhoneNumber?: string;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=state_full_name" })
  stateFullName?: string;

  @Metadata({ data: "json, name=website_url1" })
  websiteUrl1?: string;

  @Metadata({ data: "json, name=website_url2" })
  websiteUrl2?: string;

  @Metadata({ data: "json, name=zip_code" })
  zipCode?: string;
}
