import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudWatchDestination } from "./cloudwatchdestination";
import { KinesisFirehoseDestination } from "./kinesisfirehosedestination";
import { EventTypeEnum } from "./eventtypeenum";
import { PinpointDestination } from "./pinpointdestination";
import { SnsDestination } from "./snsdestination";


// EventDestination
/** 
 * In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
**/
export class EventDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudWatchDestination" })
  cloudWatchDestination?: CloudWatchDestination;

  @Metadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=KinesisFirehoseDestination" })
  kinesisFirehoseDestination?: KinesisFirehoseDestination;

  @Metadata({ data: "json, name=MatchingEventTypes" })
  matchingEventTypes: EventTypeEnum[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=PinpointDestination" })
  pinpointDestination?: PinpointDestination;

  @Metadata({ data: "json, name=SnsDestination" })
  snsDestination?: SnsDestination;
}
