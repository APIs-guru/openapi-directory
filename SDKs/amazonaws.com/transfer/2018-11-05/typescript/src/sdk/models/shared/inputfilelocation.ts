import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EfsFileLocation } from "./efsfilelocation";
import { S3InputFileLocation } from "./s3inputfilelocation";



// InputFileLocation
/** 
 * Specifies the location for the file being copied. Only applicable for the Copy type of workflow steps.
**/
export class InputFileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EfsFileLocation" })
  efsFileLocation?: EfsFileLocation;

  @SpeakeasyMetadata({ data: "json, name=S3FileLocation" })
  s3FileLocation?: S3InputFileLocation;
}
