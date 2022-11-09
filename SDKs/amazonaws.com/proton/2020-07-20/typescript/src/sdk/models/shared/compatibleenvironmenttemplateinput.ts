import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompatibleEnvironmentTemplateInput
/** 
 * Compatible environment template data.
**/
export class CompatibleEnvironmentTemplateInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
