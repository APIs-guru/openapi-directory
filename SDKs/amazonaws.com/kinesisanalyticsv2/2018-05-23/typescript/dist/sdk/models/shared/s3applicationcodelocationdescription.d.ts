import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the location of an application's code stored in an S3 bucket.
**/
export declare class S3ApplicationCodeLocationDescription extends SpeakeasyBase {
    bucketArn: string;
    fileKey: string;
    objectVersion?: string;
}
