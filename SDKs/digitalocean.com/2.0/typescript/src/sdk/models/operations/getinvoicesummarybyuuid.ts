import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoiceSummaryByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" })
  invoiceUuid: string;
}


export class GetInvoiceSummaryByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceSummaryByUuidPathParams;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonOverages extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonProductCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=items", elemType: operations.GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems })
  items?: GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonTaxes extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_line1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country_iso2_code" })
  countryIso2Code?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class GetInvoiceSummaryByUuid200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=billing_period" })
  billingPeriod?: string;

  @Metadata({ data: "json, name=credits_and_adjustments" })
  creditsAndAdjustments?: GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments;

  @Metadata({ data: "json, name=invoice_uuid" })
  invoiceUuid?: string;

  @Metadata({ data: "json, name=overages" })
  overages?: GetInvoiceSummaryByUuid200ApplicationJsonOverages;

  @Metadata({ data: "json, name=product_charges" })
  productCharges?: GetInvoiceSummaryByUuid200ApplicationJsonProductCharges;

  @Metadata({ data: "json, name=taxes" })
  taxes?: GetInvoiceSummaryByUuid200ApplicationJsonTaxes;

  @Metadata({ data: "json, name=user_billing_address" })
  userBillingAddress?: GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress;

  @Metadata({ data: "json, name=user_company" })
  userCompany?: string;

  @Metadata({ data: "json, name=user_email" })
  userEmail?: string;

  @Metadata({ data: "json, name=user_name" })
  userName?: string;
}


export class GetInvoiceSummaryByUuid401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInvoiceSummaryByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoiceSummaryByUuid200ApplicationJsonObject?: GetInvoiceSummaryByUuid200ApplicationJson;

  @Metadata()
  getInvoiceSummaryByUuid401ApplicationJsonObject?: GetInvoiceSummaryByUuid401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
