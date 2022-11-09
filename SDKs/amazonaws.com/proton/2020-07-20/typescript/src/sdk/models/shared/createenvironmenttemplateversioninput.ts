import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TemplateVersionSourceInput } from "./templateversionsourceinput";
import { Tag } from "./tag";


export class CreateEnvironmentTemplateVersionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @Metadata({ data: "json, name=source" })
  source: TemplateVersionSourceInput;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
