import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StateElectionOfficeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax_number" })
  faxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address1" })
  mailingAddress1?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_address2" })
  mailingAddress2?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_city" })
  mailingCity?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_state" })
  mailingState?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing_zipcode" })
  mailingZipcode?: string;

  @SpeakeasyMetadata({ data: "json, name=office_name" })
  officeName?: string;

  @SpeakeasyMetadata({ data: "json, name=office_type" })
  officeType: string;

  @SpeakeasyMetadata({ data: "json, name=primary_phone_number" })
  primaryPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_phone_number" })
  secondaryPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=state_full_name" })
  stateFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=website_url1" })
  websiteUrl1?: string;

  @SpeakeasyMetadata({ data: "json, name=website_url2" })
  websiteUrl2?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode?: string;
}
