import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Provides a summary of the properties of an event tracker. For a complete listing, call the <a>DescribeEventTracker</a> API.
**/
export declare class EventTrackerSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    eventTrackerArn?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
