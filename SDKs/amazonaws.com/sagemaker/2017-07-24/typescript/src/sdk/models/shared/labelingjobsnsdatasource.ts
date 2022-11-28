import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelingJobSnsDataSource
/** 
 * An Amazon SNS data source used for streaming labeling jobs.
**/
export class LabelingJobSnsDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn: string;
}
