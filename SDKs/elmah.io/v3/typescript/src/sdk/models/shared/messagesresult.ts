import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageOverview } from "./messageoverview";



export class MessagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: MessageOverview })
  messages?: MessageOverview[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
