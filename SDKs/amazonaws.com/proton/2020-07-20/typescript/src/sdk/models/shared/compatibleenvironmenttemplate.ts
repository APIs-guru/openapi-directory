import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompatibleEnvironmentTemplate
/** 
 * Compatible environment template data.
**/
export class CompatibleEnvironmentTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=majorVersion" })
  majorVersion: string;

  @Metadata({ data: "json, name=templateName" })
  templateName: string;
}
