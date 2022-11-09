import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MaintenanceWindowAutomationParameters
/** 
 * The parameters for an <code>AUTOMATION</code> task type.
**/
export class MaintenanceWindowAutomationParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;
}
