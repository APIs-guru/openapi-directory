import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";



// GroundTruthManifest
/** 
 * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. 
**/
export class GroundTruthManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Object" })
  s3Object?: S3Object;
}
