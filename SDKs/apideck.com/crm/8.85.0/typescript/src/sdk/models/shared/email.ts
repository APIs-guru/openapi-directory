import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EmailTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Billing = "billing",
    Other = "other"
}


export class Email extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EmailTypeEnum;
}
