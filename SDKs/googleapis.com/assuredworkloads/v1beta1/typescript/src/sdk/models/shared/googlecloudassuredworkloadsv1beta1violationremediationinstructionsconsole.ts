import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole
/** 
 * Remediation instructions to resolve violation via cloud console
**/
export class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalLinks" })
  additionalLinks?: string[];

  @Metadata({ data: "json, name=consoleUris" })
  consoleUris?: string[];

  @Metadata({ data: "json, name=steps" })
  steps?: string[];
}
