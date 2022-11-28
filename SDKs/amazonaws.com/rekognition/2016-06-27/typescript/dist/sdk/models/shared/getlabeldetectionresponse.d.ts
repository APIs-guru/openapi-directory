import { SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { LabelDetection } from "./labeldetection";
import { VideoMetadata } from "./videometadata";
export declare class GetLabelDetectionResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    labelModelVersion?: string;
    labels?: LabelDetection[];
    nextToken?: string;
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
