import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompatibleEnvironmentTemplateInput } from "./compatibleenvironmenttemplateinput";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
import { Tag } from "./tag";



export class CreateServiceTemplateVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibleEnvironmentTemplates", elemType: CompatibleEnvironmentTemplateInput })
  compatibleEnvironmentTemplates: CompatibleEnvironmentTemplateInput[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: TemplateVersionSourceInput;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
