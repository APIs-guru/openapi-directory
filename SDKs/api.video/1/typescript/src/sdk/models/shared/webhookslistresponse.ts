import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webhook } from "./webhook";
import { Pagination } from "./pagination";


export class WebhooksListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Webhook })
  data?: Webhook[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
