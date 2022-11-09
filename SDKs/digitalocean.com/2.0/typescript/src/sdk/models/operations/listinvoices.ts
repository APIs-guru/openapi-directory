import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// ListInvoices200ApplicationJsonInvoices
/** 
 * The invoice preview.
**/
export class ListInvoices200ApplicationJsonInvoices extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=invoice_period" })
  invoicePeriod?: string;

  @Metadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class ListInvoices200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListInvoices200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListInvoices200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListInvoices200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListInvoices200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListInvoices200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=invoice_preview" })
  invoicePreview?: shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems;

  @Metadata({ data: "json, name=invoices", elemType: operations.ListInvoices200ApplicationJsonInvoices })
  invoices?: ListInvoices200ApplicationJsonInvoices[];

  @Metadata({ data: "json, name=links" })
  links?: ListInvoices200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListInvoices200ApplicationJsonMeta;
}


export class ListInvoices401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListInvoicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listInvoices200ApplicationJsonObject?: ListInvoices200ApplicationJson;

  @Metadata()
  listInvoices401ApplicationJsonObject?: ListInvoices401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
