import { SpeakeasyBase } from "../../../internal/utils";
import { CelebrityRecognitionSortByEnum } from "./celebrityrecognitionsortbyenum";
export declare class GetCelebrityRecognitionRequest extends SpeakeasyBase {
    jobId: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: CelebrityRecognitionSortByEnum;
}
