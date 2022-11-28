import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MaintenanceWindowAutomationParameters
/** 
 * The parameters for an <code>AUTOMATION</code> task type.
**/
export class MaintenanceWindowAutomationParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;
}
