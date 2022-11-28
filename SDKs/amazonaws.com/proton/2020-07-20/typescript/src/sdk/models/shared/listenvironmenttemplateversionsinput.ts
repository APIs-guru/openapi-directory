import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEnvironmentTemplateVersionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
