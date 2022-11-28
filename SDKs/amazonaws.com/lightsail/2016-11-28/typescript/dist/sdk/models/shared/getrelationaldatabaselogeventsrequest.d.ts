import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRelationalDatabaseLogEventsRequest extends SpeakeasyBase {
    endTime?: Date;
    logStreamName: string;
    pageToken?: string;
    relationalDatabaseName: string;
    startFromHead?: boolean;
    startTime?: Date;
}
