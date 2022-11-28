import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
/**
 * Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
**/
export declare class ImportJobResource extends SpeakeasyBase {
    defineSegment?: boolean;
    externalId?: string;
    format: FormatEnum;
    registerEndpoints?: boolean;
    roleArn: string;
    s3Url: string;
    segmentId?: string;
    segmentName?: string;
}
