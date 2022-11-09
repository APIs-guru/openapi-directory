import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddressTypeEnum {
    Primary = "primary"
,    Secondary = "secondary"
,    Home = "home"
,    Office = "office"
,    Shipping = "shipping"
,    Billing = "billing"
,    Other = "other"
}


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=contact_name" })
  contactName?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: string;

  @Metadata({ data: "json, name=line1" })
  line1?: string;

  @Metadata({ data: "json, name=line2" })
  line2?: string;

  @Metadata({ data: "json, name=line3" })
  line3?: string;

  @Metadata({ data: "json, name=line4" })
  line4?: string;

  @Metadata({ data: "json, name=longitude" })
  longitude?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=salutation" })
  salutation?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=street_number" })
  streetNumber?: string;

  @Metadata({ data: "json, name=string" })
  string?: string;

  @Metadata({ data: "json, name=type" })
  type?: AddressTypeEnum;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
