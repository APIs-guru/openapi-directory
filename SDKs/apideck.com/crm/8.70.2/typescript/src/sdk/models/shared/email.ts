import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EmailTypeEnum {
    Primary = "primary"
,    Secondary = "secondary"
,    Work = "work"
,    Personal = "personal"
,    Billing = "billing"
,    Other = "other"
}


export class Email extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: EmailTypeEnum;
}
