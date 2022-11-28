import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringStatisticsResource
/** 
 * The statistics resource for a monitoring job.
**/
export class MonitoringStatisticsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
