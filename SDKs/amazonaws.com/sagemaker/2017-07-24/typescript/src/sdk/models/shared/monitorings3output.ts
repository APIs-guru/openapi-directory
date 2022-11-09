import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingS3UploadModeEnum } from "./processings3uploadmodeenum";


// MonitoringS3Output
/** 
 * Information about where and how you want to store the results of a monitoring job.
**/
export class MonitoringS3Output extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalPath" })
  localPath: string;

  @Metadata({ data: "json, name=S3UploadMode" })
  s3UploadMode?: ProcessingS3UploadModeEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
