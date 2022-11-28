import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bill } from "./bill";



export class GetBillResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Bill;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode: number;
}
