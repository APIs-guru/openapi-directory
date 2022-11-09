import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelingJobOutputConfig
/** 
 * Output configuration information for a labeling job.
**/
export class LabelingJobOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3OutputPath" })
  s3OutputPath: string;

  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;
}
