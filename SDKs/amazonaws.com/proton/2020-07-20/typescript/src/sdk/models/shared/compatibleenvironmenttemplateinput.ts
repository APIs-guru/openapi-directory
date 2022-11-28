import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CompatibleEnvironmentTemplateInput
/** 
 * Compatible environment template data.
**/
export class CompatibleEnvironmentTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
