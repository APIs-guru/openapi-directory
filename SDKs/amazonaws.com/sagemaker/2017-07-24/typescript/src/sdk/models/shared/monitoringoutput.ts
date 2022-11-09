import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MonitoringS3Output } from "./monitorings3output";


// MonitoringOutput
/** 
 * The output object for a monitoring job.
**/
export class MonitoringOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Output" })
  s3Output: MonitoringS3Output;
}
