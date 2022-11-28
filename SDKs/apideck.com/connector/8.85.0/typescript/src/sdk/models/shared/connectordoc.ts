import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectorDocAudienceEnum {
    ApplicationOwner = "application_owner",
    Consumer = "consumer"
}

export enum ConnectorDocFormatEnum {
    Markdown = "markdown"
}


export class ConnectorDoc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: ConnectorDocAudienceEnum;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: ConnectorDocFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
