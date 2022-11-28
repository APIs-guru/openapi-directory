import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CompatibleEnvironmentTemplate
/** 
 * Compatible environment template data.
**/
export class CompatibleEnvironmentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName: string;
}
