import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { EventTypeEnum } from "./eventtypeenum";
import { SnsDestination } from "./snsdestination";



// EventDestination
/** 
 * An object that defines an event destination.
**/
export class EventDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLogsDestination" })
  cloudWatchLogsDestination?: CloudWatchLogsDestination;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseDestination" })
  kinesisFirehoseDestination?: KinesisFirehoseDestination;

  @SpeakeasyMetadata({ data: "json, name=MatchingEventTypes" })
  matchingEventTypes?: EventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsDestination" })
  snsDestination?: SnsDestination;
}
