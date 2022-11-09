import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoiceCsvByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" })
  invoiceUuid: string;
}


export class GetInvoiceCsvByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceCsvByUuidPathParams;
}


export class GetInvoiceCsvByUuid401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInvoiceCsvByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoiceCsvByUuid200TextCsvString?: string;

  @Metadata()
  getInvoiceCsvByUuid401ApplicationJsonObject?: GetInvoiceCsvByUuid401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
