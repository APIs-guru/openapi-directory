import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnsConfiguration
/** 
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
**/
export class SnsConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;
}
