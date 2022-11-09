import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webhook } from "./webhook";
import { Range } from "./range";


// WebhookList
/** 
 * List of webhooks
**/
export class WebhookList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Webhook })
  items: Webhook[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}
