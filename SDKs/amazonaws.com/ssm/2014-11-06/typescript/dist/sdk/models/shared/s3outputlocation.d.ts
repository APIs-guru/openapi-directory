import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An S3 bucket where you want to store the results of this request.
**/
export declare class S3OutputLocation extends SpeakeasyBase {
    outputS3BucketName?: string;
    outputS3KeyPrefix?: string;
    outputS3Region?: string;
}
