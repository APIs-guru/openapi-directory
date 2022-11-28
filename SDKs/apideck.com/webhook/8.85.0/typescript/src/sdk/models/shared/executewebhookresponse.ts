import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExecuteWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
