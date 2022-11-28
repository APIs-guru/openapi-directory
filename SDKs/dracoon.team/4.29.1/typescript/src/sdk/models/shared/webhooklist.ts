import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Range } from "./range";



// WebhookList
/** 
 * List of webhooks
**/
export class WebhookList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Webhook })
  items: Webhook[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}
