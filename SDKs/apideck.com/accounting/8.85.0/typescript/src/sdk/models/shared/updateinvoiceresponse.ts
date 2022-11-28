import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceResponse } from "./invoiceresponse";



export class UpdateInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: InvoiceResponse;

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
