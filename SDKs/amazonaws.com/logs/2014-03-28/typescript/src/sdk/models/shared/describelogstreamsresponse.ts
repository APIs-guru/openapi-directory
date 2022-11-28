import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogStream } from "./logstream";



export class DescribeLogStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logStreams", elemType: LogStream })
  logStreams?: LogStream[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
