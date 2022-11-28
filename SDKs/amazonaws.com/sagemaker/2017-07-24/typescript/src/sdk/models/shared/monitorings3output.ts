import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3UploadModeEnum } from "./processings3uploadmodeenum";



// MonitoringS3Output
/** 
 * Information about where and how you want to store the results of a monitoring job.
**/
export class MonitoringS3Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath: string;

  @SpeakeasyMetadata({ data: "json, name=S3UploadMode" })
  s3UploadMode?: ProcessingS3UploadModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
