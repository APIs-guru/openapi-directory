import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConnectorDocAudienceEnum {
    ApplicationOwner = "application_owner"
,    Consumer = "consumer"
}

export enum ConnectorDocFormatEnum {
    Markdown = "markdown"
}


export class ConnectorDoc extends SpeakeasyBase {
  @Metadata({ data: "json, name=audience" })
  audience?: ConnectorDocAudienceEnum;

  @Metadata({ data: "json, name=format" })
  format?: ConnectorDocFormatEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
