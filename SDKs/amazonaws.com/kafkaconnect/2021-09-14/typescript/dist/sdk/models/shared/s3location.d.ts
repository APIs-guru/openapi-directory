import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location of an object in Amazon S3.
**/
export declare class S3Location extends SpeakeasyBase {
    bucketArn: string;
    fileKey: string;
    objectVersion?: string;
}
