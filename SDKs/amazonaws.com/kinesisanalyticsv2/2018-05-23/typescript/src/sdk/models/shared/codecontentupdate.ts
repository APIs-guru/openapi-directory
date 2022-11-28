import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3ContentLocationUpdate } from "./s3contentlocationupdate";



// CodeContentUpdate
/** 
 * Describes an update to the code of an application. Not supported for Apache Zeppelin.
**/
export class CodeContentUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3ContentLocationUpdate" })
  s3ContentLocationUpdate?: S3ContentLocationUpdate;

  @SpeakeasyMetadata({ data: "json, name=TextContentUpdate" })
  textContentUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=ZipFileContentUpdate" })
  zipFileContentUpdate?: string;
}
