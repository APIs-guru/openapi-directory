import { SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { PersonDetection } from "./persondetection";
import { VideoMetadata } from "./videometadata";
export declare class GetPersonTrackingResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    persons?: PersonDetection[];
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
