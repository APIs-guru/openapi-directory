import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEnvironmentTemplateVersionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
