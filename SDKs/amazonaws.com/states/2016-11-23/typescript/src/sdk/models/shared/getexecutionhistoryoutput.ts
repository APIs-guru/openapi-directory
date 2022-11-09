import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistoryEvent } from "./historyevent";


export class GetExecutionHistoryOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=events", elemType: shared.HistoryEvent })
  events: HistoryEvent[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
