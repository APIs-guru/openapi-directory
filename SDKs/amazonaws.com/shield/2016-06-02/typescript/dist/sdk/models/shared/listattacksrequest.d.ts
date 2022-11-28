import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
export declare class ListAttacksRequest extends SpeakeasyBase {
    endTime?: TimeRange;
    maxResults?: number;
    nextToken?: string;
    resourceArns?: string[];
    startTime?: TimeRange;
}
