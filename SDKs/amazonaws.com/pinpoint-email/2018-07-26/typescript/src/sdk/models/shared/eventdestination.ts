import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudWatchDestination } from "./cloudwatchdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { EventTypeEnum } from "./eventtypeenum";
import { PinpointDestination } from "./pinpointdestination";
import { SnsDestination } from "./snsdestination";



// EventDestination
/** 
 * In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
**/
export class EventDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchDestination" })
  cloudWatchDestination?: CloudWatchDestination;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KinesisFirehoseDestination" })
  kinesisFirehoseDestination?: KinesisFirehoseDestination;

  @SpeakeasyMetadata({ data: "json, name=MatchingEventTypes" })
  matchingEventTypes: EventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=PinpointDestination" })
  pinpointDestination?: PinpointDestination;

  @SpeakeasyMetadata({ data: "json, name=SnsDestination" })
  snsDestination?: SnsDestination;
}
