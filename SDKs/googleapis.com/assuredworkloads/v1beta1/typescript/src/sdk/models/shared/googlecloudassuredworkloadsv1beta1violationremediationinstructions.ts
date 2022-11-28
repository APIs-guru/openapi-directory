import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole } from "./googlecloudassuredworkloadsv1beta1violationremediationinstructionsconsole";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud } from "./googlecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud";



// GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions
/** 
 * Instructions to remediate violation
**/
export class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consoleInstructions" })
  consoleInstructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole;

  @SpeakeasyMetadata({ data: "json, name=gcloudInstructions" })
  gcloudInstructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud;
}
