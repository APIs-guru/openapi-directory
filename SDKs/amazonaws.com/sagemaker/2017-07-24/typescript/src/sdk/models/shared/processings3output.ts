import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProcessingS3UploadModeEnum } from "./processings3uploadmodeenum";


// ProcessingS3Output
/** 
 * Configuration for uploading output data to Amazon S3 from the processing container.
**/
export class ProcessingS3Output extends SpeakeasyBase {
  @Metadata({ data: "json, name=LocalPath" })
  localPath: string;

  @Metadata({ data: "json, name=S3UploadMode" })
  s3UploadMode: ProcessingS3UploadModeEnum;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
