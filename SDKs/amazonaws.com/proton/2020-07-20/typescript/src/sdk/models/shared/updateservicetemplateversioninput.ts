import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompatibleEnvironmentTemplateInput } from "./compatibleenvironmenttemplateinput";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";


export class UpdateServiceTemplateVersionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibleEnvironmentTemplates", elemType: shared.CompatibleEnvironmentTemplateInput })
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[];

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
