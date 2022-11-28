import { SpeakeasyBase } from "../../../internal/utils";
import { S3Object } from "./s3object";
/**
 * The S3 bucket that contains an Amazon Sagemaker Ground Truth format manifest file.
**/
export declare class GroundTruthManifest extends SpeakeasyBase {
    s3Object?: S3Object;
}
