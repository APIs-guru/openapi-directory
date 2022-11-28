import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputLogEvent } from "./outputlogevent";



export class GetLogEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: OutputLogEvent })
  events?: OutputLogEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextBackwardToken" })
  nextBackwardToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextForwardToken" })
  nextForwardToken?: string;
}
