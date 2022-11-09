import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";


export class UpdateEnvironmentTemplateVersionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @Metadata({ data: "json, name=status" })
  status?: TemplateVersionStatusEnum;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
