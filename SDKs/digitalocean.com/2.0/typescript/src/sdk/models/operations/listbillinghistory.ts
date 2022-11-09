import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum {
    AchFailure = "ACHFailure"
,    Adjustment = "Adjustment"
,    AttemptFailed = "AttemptFailed"
,    Chargeback = "Chargeback"
,    Credit = "Credit"
,    CreditExpiration = "CreditExpiration"
,    Invoice = "Invoice"
,    Payment = "Payment"
,    Refund = "Refund"
,    Reversal = "Reversal"
}


export class ListBillingHistory200ApplicationJsonBillingHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=invoice_id" })
  invoiceId?: string;

  @Metadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @Metadata({ data: "json, name=type" })
  type?: ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum;
}


export class ListBillingHistory200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListBillingHistory200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListBillingHistory200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListBillingHistory200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListBillingHistory200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListBillingHistory200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_history", elemType: operations.ListBillingHistory200ApplicationJsonBillingHistory })
  billingHistory: ListBillingHistory200ApplicationJsonBillingHistory[];

  @Metadata({ data: "json, name=links" })
  links?: ListBillingHistory200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListBillingHistory200ApplicationJsonMeta;
}


export class ListBillingHistory401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListBillingHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listBillingHistory200ApplicationJsonObject?: ListBillingHistory200ApplicationJson;

  @Metadata()
  listBillingHistory401ApplicationJsonObject?: ListBillingHistory401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
