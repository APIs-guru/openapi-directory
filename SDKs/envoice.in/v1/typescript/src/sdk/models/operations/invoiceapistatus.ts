import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InvoiceApiStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class InvoiceApiStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}

export enum InvoiceApiStatus200ApplicationJsonEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}

export enum InvoiceApiStatus200TextJsonEnum {
    Draft = "Draft",
    Paid = "Paid",
    Unpaid = "Unpaid",
    Overdue = "Overdue",
    Void = "Void"
}


export class InvoiceApiStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InvoiceApiStatusQueryParams;

  @SpeakeasyMetadata()
  headers: InvoiceApiStatusHeaders;
}


export class InvoiceApiStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceApiStatus200ApplicationJsonStringEnum?: InvoiceApiStatus200ApplicationJsonEnum;

  @SpeakeasyMetadata()
  invoiceApiStatus200TextJsonStringEnum?: InvoiceApiStatus200TextJsonEnum;

  @SpeakeasyMetadata()
  statusCode: number;
}
