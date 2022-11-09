import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelingJobSnsDataSource
/** 
 * An Amazon SNS data source used for streaming labeling jobs.
**/
export class LabelingJobSnsDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;
}
