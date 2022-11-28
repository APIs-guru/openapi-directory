import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputLogEvent } from "./inputlogevent";



export class PutLogEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logEvents", elemType: InputLogEvent })
  logEvents: InputLogEvent[];

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName: string;

  @SpeakeasyMetadata({ data: "json, name=sequenceToken" })
  sequenceToken?: string;
}
