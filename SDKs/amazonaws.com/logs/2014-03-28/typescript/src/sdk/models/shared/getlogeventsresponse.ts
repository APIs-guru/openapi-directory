import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutputLogEvent } from "./outputlogevent";


export class GetLogEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.OutputLogEvent })
  events?: OutputLogEvent[];

  @Metadata({ data: "json, name=nextBackwardToken" })
  nextBackwardToken?: string;

  @Metadata({ data: "json, name=nextForwardToken" })
  nextForwardToken?: string;
}
