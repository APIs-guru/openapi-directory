import { SpeakeasyBase } from "../../../internal/utils";
import { S3Bucket } from "./s3bucket";
import { S3Object } from "./s3object";
/**
 * Provides information about the resources that a finding applies to.
**/
export declare class ResourcesAffected extends SpeakeasyBase {
    s3Bucket?: S3Bucket;
    s3Object?: S3Object;
}
