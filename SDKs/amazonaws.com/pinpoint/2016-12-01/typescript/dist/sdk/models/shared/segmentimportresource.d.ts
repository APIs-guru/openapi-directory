import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
/**
 * Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions.
**/
export declare class SegmentImportResource extends SpeakeasyBase {
    channelCounts?: Map<string, number>;
    externalId: string;
    format: FormatEnum;
    roleArn: string;
    s3Url: string;
    size: number;
}
