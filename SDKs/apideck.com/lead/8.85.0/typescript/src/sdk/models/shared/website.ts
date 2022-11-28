import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebsiteTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Other = "other"
}


export class Website extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WebsiteTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
