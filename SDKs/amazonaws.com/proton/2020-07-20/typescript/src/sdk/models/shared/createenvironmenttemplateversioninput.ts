import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
import { Tag } from "./tag";



export class CreateEnvironmentTemplateVersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

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
