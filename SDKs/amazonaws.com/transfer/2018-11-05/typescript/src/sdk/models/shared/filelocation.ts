import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EfsFileLocation } from "./efsfilelocation";
import { S3FileLocation } from "./s3filelocation";


// FileLocation
/** 
 * Specifies the Amazon S3 or EFS file details to be used in the step.
**/
export class FileLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=EfsFileLocation" })
  efsFileLocation?: EfsFileLocation;

  @Metadata({ data: "json, name=S3FileLocation" })
  s3FileLocation?: S3FileLocation;
}
