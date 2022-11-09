import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExecuteWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
