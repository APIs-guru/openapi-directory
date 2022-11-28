import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingJobOutputConfig
/** 
 * Output configuration information for a labeling job.
**/
export class LabelingJobOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;
}
