import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoicePdfByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" })
  invoiceUuid: string;
}


export class GetInvoicePdfByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoicePdfByUuidPathParams;
}


export class GetInvoicePdfByUuid401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInvoicePdfByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoicePdfByUuid200ApplicationPdfBinaryString?: Uint8Array;

  @Metadata()
  getInvoicePdfByUuid401ApplicationJsonObject?: GetInvoicePdfByUuid401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
