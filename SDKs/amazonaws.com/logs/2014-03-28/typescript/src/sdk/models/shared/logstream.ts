import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogStream
/** 
 * Represents a log stream, which is a sequence of log events from a single emitter of logs.
**/
export class LogStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=firstEventTimestamp" })
  firstEventTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=lastEventTimestamp" })
  lastEventTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=lastIngestionTime" })
  lastIngestionTime?: number;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @SpeakeasyMetadata({ data: "json, name=storedBytes" })
  storedBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=uploadSequenceToken" })
  uploadSequenceToken?: string;
}
