import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { EventTypeEnum } from "./eventtypeenum";
import { SnsDestination } from "./snsdestination";
/**
 * An object that defines an event destination.
**/
export declare class EventDestination extends SpeakeasyBase {
    cloudWatchLogsDestination?: CloudWatchLogsDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: KinesisFirehoseDestination;
    matchingEventTypes?: EventTypeEnum[];
    name?: string;
    snsDestination?: SnsDestination;
}
