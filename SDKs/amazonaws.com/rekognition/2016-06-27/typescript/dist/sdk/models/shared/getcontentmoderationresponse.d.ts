import { SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { ContentModerationDetection } from "./contentmoderationdetection";
import { VideoMetadata } from "./videometadata";
export declare class GetContentModerationResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    moderationLabels?: ContentModerationDetection[];
    moderationModelVersion?: string;
    nextToken?: string;
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
