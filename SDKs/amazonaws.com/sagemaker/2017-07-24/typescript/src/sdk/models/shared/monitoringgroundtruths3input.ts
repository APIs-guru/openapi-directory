import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringGroundTruthS3Input
/** 
 * The ground truth labels for the dataset used for the monitoring job.
**/
export class MonitoringGroundTruthS3Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
