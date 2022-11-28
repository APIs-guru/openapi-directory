import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountSettings
/** 
 * The AWS Proton pipeline service role data.
**/
export class AccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineServiceRoleArn" })
  pipelineServiceRoleArn?: string;
}
