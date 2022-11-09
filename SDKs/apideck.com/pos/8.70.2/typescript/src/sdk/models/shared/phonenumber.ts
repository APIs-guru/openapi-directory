import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PhoneNumberTypeEnum {
    Primary = "primary"
,    Secondary = "secondary"
,    Home = "home"
,    Work = "work"
,    Office = "office"
,    Mobile = "mobile"
,    Assistant = "assistant"
,    Fax = "fax"
,    DirectDialIn = "direct-dial-in"
,    Personal = "personal"
,    Other = "other"
}


export class PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=area_code" })
  areaCode?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=number" })
  number: string;

  @Metadata({ data: "json, name=type" })
  type?: PhoneNumberTypeEnum;
}
