import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Resource } from "./s3resource";


// FailedS3Resource
/** 
 * Includes details about the failed S3 resources.
**/
export class FailedS3Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=failedItem" })
  failedItem?: S3Resource;
}
