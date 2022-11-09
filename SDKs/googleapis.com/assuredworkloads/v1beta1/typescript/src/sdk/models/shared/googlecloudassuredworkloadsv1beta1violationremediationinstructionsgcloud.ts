import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud
/** 
 * Remediation instructions to resolve violation via gcloud cli
**/
export class GoogleCloudAssuredworkloadsV1beta1ViolationRemediationInstructionsGcloud extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalLinks" })
  additionalLinks?: string[];

  @Metadata({ data: "json, name=gcloudCommands" })
  gcloudCommands?: string[];

  @Metadata({ data: "json, name=steps" })
  steps?: string[];
}
