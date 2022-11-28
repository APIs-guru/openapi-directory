import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
**/
export declare class ExportJobResource extends SpeakeasyBase {
    roleArn: string;
    s3UrlPrefix: string;
    segmentId?: string;
    segmentVersion?: number;
}
