import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListServiceTemplateVersionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
