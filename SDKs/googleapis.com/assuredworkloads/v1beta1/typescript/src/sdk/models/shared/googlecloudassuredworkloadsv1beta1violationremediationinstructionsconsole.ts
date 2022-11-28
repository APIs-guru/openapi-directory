import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole
/** 
 * Remediation instructions to resolve violation via cloud console
**/
export class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsConsole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalLinks" })
  additionalLinks?: string[];

  @SpeakeasyMetadata({ data: "json, name=consoleUris" })
  consoleUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: string[];
}
