import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringS3Output } from "./monitorings3output";



// MonitoringOutput
/** 
 * The output object for a monitoring job.
**/
export class MonitoringOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Output" })
  s3Output: MonitoringS3Output;
}
