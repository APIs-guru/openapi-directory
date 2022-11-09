import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InvoiceApiStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class InvoiceApiStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class InvoiceApiStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: InvoiceApiStatusQueryParams;

  @Metadata()
  headers: InvoiceApiStatusHeaders;
}

export enum InvoiceApiStatus200ApplicationJsonEnum {
    Draft = "Draft"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    Void = "Void"
}

export enum InvoiceApiStatus200TextJsonEnum {
    Draft = "Draft"
,    Paid = "Paid"
,    Unpaid = "Unpaid"
,    Overdue = "Overdue"
,    Void = "Void"
}


export class InvoiceApiStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceApiStatus200ApplicationJsonStringEnum?: InvoiceApiStatus200ApplicationJsonEnum;

  @Metadata()
  invoiceApiStatus200TextJsonStringEnum?: InvoiceApiStatus200TextJsonEnum;

  @Metadata()
  statusCode: number;
}
