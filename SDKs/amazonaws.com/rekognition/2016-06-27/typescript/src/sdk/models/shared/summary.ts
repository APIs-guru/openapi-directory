import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";



// Summary
/** 
 * <p>The S3 bucket that contains the training summary. The training summary includes aggregated evaluation metrics for the entire testing dataset and metrics for each individual label. </p> <p>You get the training summary S3 bucket location by calling <a>DescribeProjectVersions</a>. </p>
**/
export class Summary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Object" })
  s3Object?: S3Object;
}
