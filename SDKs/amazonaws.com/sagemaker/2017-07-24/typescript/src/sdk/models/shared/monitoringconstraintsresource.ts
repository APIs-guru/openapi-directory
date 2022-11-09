import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MonitoringConstraintsResource
/** 
 * The constraints resource for a monitoring job.
**/
export class MonitoringConstraintsResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
