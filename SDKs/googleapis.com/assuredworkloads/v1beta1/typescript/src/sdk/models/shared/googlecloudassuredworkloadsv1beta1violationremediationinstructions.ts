import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole } from "./googlecloudassuredworkloadsv1beta1violationremediationinstructionsconsole";
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud } from "./googlecloudassuredworkloadsv1beta1violationremediationinstructionsgcloud";


// GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions
/** 
 * Instructions to remediate violation
**/
export class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructions extends SpeakeasyBase {
  @Metadata({ data: "json, name=consoleInstructions" })
  consoleInstructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole;

  @Metadata({ data: "json, name=gcloudInstructions" })
  gcloudInstructions?: GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud;
}
