import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MonitoringConstraintsResource
/** 
 * The constraints resource for a monitoring job.
**/
export class MonitoringConstraintsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
