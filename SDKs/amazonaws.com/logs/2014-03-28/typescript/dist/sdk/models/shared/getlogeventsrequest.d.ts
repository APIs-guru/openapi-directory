import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetLogEventsRequest extends SpeakeasyBase {
    endTime?: number;
    limit?: number;
    logGroupName: string;
    logStreamName: string;
    nextToken?: string;
    startFromHead?: boolean;
    startTime?: number;
}
