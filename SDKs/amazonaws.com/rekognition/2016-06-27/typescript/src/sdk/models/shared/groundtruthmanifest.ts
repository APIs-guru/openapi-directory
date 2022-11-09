import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Object } from "./s3object";


// GroundTruthManifest
/** 
 * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file. 
**/
export class GroundTruthManifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Object" })
  s3Object?: S3Object;
}
