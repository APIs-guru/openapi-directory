import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud
/** 
 * Remediation instructions to resolve violation via gcloud cli
**/
export class GoogleCloudAssuredworkloadsV1ViolationRemediationInstructionsGcloud extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalLinks" })
  additionalLinks?: string[];

  @SpeakeasyMetadata({ data: "json, name=gcloudCommands" })
  gcloudCommands?: string[];

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: string[];
}
