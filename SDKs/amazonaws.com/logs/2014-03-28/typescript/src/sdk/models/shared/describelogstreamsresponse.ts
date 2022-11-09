import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogStream } from "./logstream";


export class DescribeLogStreamsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logStreams", elemType: shared.LogStream })
  logStreams?: LogStream[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
