import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Resource } from "./s3resource";



// FailedS3Resource
/** 
 * Includes details about the failed S3 resources.
**/
export class FailedS3Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=failedItem" })
  failedItem?: S3Resource;
}
