import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HistoryEvent } from "./historyevent";



export class GetExecutionHistoryOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events", elemType: HistoryEvent })
  events: HistoryEvent[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
