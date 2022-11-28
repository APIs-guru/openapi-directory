import { SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { TextDetectionResult } from "./textdetectionresult";
import { VideoMetadata } from "./videometadata";
export declare class GetTextDetectionResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    textDetections?: TextDetectionResult[];
    textModelVersion?: string;
    videoMetadata?: VideoMetadata;
}
