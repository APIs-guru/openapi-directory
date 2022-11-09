import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3ContentLocationUpdate } from "./s3contentlocationupdate";


// CodeContentUpdate
/** 
 * Describes an update to the code of an application. Not supported for Apache Zeppelin.
**/
export class CodeContentUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3ContentLocationUpdate" })
  s3ContentLocationUpdate?: S3ContentLocationUpdate;

  @Metadata({ data: "json, name=TextContentUpdate" })
  textContentUpdate?: string;

  @Metadata({ data: "json, name=ZipFileContentUpdate" })
  zipFileContentUpdate?: string;
}
