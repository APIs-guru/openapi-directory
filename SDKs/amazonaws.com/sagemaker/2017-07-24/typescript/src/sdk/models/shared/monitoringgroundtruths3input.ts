import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringGroundTruthS3Input
/** 
 * The ground truth labels for the dataset used for the monitoring job.
**/
export class MonitoringGroundTruthS3Input extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
