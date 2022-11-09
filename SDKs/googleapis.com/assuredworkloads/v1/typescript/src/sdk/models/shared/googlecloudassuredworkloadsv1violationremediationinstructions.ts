import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole } from "./googlecloudassuredworkloadsv1violationremediationinstructionsconsole";
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud } from "./googlecloudassuredworkloadsv1violationremediationinstructionsgcloud";


// GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions
/** 
 * Instructions to remediate violation
**/
export class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions extends SpeakeasyBase {
  @Metadata({ data: "json, name=consoleInstructions" })
  consoleInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsConsole;

  @Metadata({ data: "json, name=gcloudInstructions" })
  gcloudInstructions?: GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud;
}
