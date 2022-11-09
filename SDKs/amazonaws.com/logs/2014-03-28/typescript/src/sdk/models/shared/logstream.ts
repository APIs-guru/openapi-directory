import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LogStream
/** 
 * Represents a log stream, which is a sequence of log events from a single emitter of logs.
**/
export class LogStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: number;

  @Metadata({ data: "json, name=firstEventTimestamp" })
  firstEventTimestamp?: number;

  @Metadata({ data: "json, name=lastEventTimestamp" })
  lastEventTimestamp?: number;

  @Metadata({ data: "json, name=lastIngestionTime" })
  lastIngestionTime?: number;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName?: string;

  @Metadata({ data: "json, name=storedBytes" })
  storedBytes?: number;

  @Metadata({ data: "json, name=uploadSequenceToken" })
  uploadSequenceToken?: string;
}
