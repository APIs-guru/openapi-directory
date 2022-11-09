import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MessageOverview } from "./messageoverview";


export class MessagesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.MessageOverview })
  messages?: MessageOverview[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
