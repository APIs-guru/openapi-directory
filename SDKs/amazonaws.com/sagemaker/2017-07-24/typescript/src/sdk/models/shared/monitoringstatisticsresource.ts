import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringStatisticsResource
/** 
 * The statistics resource for a monitoring job.
**/
export class MonitoringStatisticsResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
