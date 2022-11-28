import { SpeakeasyBase } from "../../../internal/utils";
export declare class FilterLogEventsRequest extends SpeakeasyBase {
    endTime?: number;
    filterPattern?: string;
    interleaved?: boolean;
    limit?: number;
    logGroupName: string;
    logStreamNamePrefix?: string;
    logStreamNames?: string[];
    nextToken?: string;
    startTime?: number;
}
