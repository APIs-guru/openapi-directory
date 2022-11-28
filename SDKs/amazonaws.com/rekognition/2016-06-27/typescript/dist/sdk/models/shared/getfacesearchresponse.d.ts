import { SpeakeasyBase } from "../../../internal/utils";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { PersonMatch } from "./personmatch";
import { VideoMetadata } from "./videometadata";
export declare class GetFaceSearchResponse extends SpeakeasyBase {
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    persons?: PersonMatch[];
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
