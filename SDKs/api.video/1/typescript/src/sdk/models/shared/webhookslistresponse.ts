import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webhook } from "./webhook";
import { Pagination } from "./pagination";



export class WebhooksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Webhook })
  data?: Webhook[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
