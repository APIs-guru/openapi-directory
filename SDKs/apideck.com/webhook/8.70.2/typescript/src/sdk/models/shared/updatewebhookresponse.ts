import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Webhook } from "./webhook";


export class UpdateWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Webhook;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
