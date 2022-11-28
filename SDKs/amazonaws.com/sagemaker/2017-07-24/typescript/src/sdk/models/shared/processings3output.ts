import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingS3UploadModeEnum } from "./processings3uploadmodeenum";



// ProcessingS3Output
/** 
 * Configuration for uploading output data to Amazon S3 from the processing container.
**/
export class ProcessingS3Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocalPath" })
  localPath: string;

  @SpeakeasyMetadata({ data: "json, name=S3UploadMode" })
  s3UploadMode: ProcessingS3UploadModeEnum;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
