import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibleEnvironmentTemplateInput } from "./compatibleenvironmenttemplateinput";
import { TemplateVersionStatusEnum } from "./templateversionstatusenum";



export class UpdateServiceTemplateVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibleEnvironmentTemplates", elemType: CompatibleEnvironmentTemplateInput })
  compatibleEnvironmentTemplates?: CompatibleEnvironmentTemplateInput[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TemplateVersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
