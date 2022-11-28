import { SpeakeasyBase } from "../../../internal/utils";
import { PersonTrackingSortByEnum } from "./persontrackingsortbyenum";
export declare class GetPersonTrackingRequest extends SpeakeasyBase {
    jobId: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: PersonTrackingSortByEnum;
}
