import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddressTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Home = "home",
    Office = "office",
    Shipping = "shipping",
    Billing = "billing",
    Other = "other"
}


export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=line3" })
  line3?: string;

  @SpeakeasyMetadata({ data: "json, name=line4" })
  line4?: string;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=street_number" })
  streetNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=string" })
  string?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
