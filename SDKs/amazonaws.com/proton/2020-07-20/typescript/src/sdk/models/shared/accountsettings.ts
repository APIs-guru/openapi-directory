import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountSettings
/** 
 * The AWS Proton pipeline service role data.
**/
export class AccountSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineServiceRoleArn" })
  pipelineServiceRoleArn?: string;
}
