import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebsiteTypeEnum {
    Primary = "primary"
,    Secondary = "secondary"
,    Work = "work"
,    Personal = "personal"
,    Other = "other"
}


export class Website extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: WebsiteTypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
