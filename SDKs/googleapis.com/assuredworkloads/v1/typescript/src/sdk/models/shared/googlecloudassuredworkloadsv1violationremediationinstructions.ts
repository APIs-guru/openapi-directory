import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole } from "./googlecloudassuredworkloadsv1violationremediationinstructionsconsole";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud } from "./googlecloudassuredworkloadsv1violationremediationinstructionsgcloud";



// GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions
/** 
 * Instructions to remediate violation
**/
export class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consoleInstructions" })
  consoleInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole;

  @SpeakeasyMetadata({ data: "json, name=gcloudInstructions" })
  gcloudInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud;
}
