import { SpeakeasyBase } from "../../../internal/utils";
import { CelebrityRecognition } from "./celebrityrecognition";
import { VideoJobStatusEnum } from "./videojobstatusenum";
import { VideoMetadata } from "./videometadata";
export declare class GetCelebrityRecognitionResponse extends SpeakeasyBase {
    celebrities?: CelebrityRecognition[];
    jobStatus?: VideoJobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    videoMetadata?: VideoMetadata;
}
