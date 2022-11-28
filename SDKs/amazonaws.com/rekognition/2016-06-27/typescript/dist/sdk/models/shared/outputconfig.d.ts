import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The S3 bucket and folder location where training output is placed.
**/
export declare class OutputConfig extends SpeakeasyBase {
    s3Bucket?: string;
    s3KeyPrefix?: string;
}
