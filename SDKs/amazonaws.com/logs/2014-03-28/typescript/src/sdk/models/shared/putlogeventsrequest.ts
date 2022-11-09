import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InputLogEvent } from "./inputlogevent";


export class PutLogEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logEvents", elemType: shared.InputLogEvent })
  logEvents: InputLogEvent[];

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=logStreamName" })
  logStreamName: string;

  @Metadata({ data: "json, name=sequenceToken" })
  sequenceToken?: string;
}
