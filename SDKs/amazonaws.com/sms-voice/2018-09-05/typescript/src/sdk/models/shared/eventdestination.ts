import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchLogsDestination } from "./cloudwatchlogsdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { EventTypeEnum } from "./eventtypeenum";
import { SnsDestination } from "./snsdestination";


// EventDestination
/** 
 * An object that defines an event destination.
**/
export class EventDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchLogsDestination" })
  cloudWatchLogsDestination?: CloudWatchLogsDestination;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=KinesisFirehoseDestination" })
  kinesisFirehoseDestination?: KinesisFirehoseDestination;

  @Metadata({ data: "json, name=MatchingEventTypes" })
  matchingEventTypes?: EventTypeEnum[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SnsDestination" })
  snsDestination?: SnsDestination;
}
