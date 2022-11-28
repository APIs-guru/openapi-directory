import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PhoneNumberTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Home = "home",
    Work = "work",
    Office = "office",
    Mobile = "mobile",
    Assistant = "assistant",
    Fax = "fax",
    DirectDialIn = "direct-dial-in",
    Personal = "personal",
    Other = "other"
}


export class PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area_code" })
  areaCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PhoneNumberTypeEnum;
}
