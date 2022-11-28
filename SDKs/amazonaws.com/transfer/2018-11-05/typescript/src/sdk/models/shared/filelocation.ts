import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EfsFileLocation } from "./efsfilelocation";
import { S3FileLocation } from "./s3filelocation";



// FileLocation
/** 
 * Specifies the Amazon S3 or EFS file details to be used in the step.
**/
export class FileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EfsFileLocation" })
  efsFileLocation?: EfsFileLocation;

  @SpeakeasyMetadata({ data: "json, name=S3FileLocation" })
  s3FileLocation?: S3FileLocation;
}
