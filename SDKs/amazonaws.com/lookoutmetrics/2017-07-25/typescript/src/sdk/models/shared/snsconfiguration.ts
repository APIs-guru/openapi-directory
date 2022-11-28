import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnsConfiguration
/** 
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
**/
export class SnsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;
}
