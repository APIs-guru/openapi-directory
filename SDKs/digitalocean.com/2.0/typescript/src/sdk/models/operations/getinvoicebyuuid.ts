import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoiceByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" })
  invoiceUuid: string;
}


export class GetInvoiceByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInvoiceByUuidPathParams;
}


export class GetInvoiceByUuid200ApplicationJsonInvoiceItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=duration_unit" })
  durationUnit?: string;

  @Metadata({ data: "json, name=end_time" })
  endTime?: string;

  @Metadata({ data: "json, name=group_description" })
  groupDescription?: string;

  @Metadata({ data: "json, name=product" })
  product?: string;

  @Metadata({ data: "json, name=project_name" })
  projectName?: string;

  @Metadata({ data: "json, name=resource_id" })
  resourceId?: string;

  @Metadata({ data: "json, name=resource_uuid" })
  resourceUuid?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;
}


export class GetInvoiceByUuid200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class GetInvoiceByUuid200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class GetInvoiceByUuid200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// GetInvoiceByUuid200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class GetInvoiceByUuid200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class GetInvoiceByUuid200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=invoice_items", elemType: operations.GetInvoiceByUuid200ApplicationJsonInvoiceItems })
  invoiceItems?: GetInvoiceByUuid200ApplicationJsonInvoiceItems[];

  @Metadata({ data: "json, name=links" })
  links?: GetInvoiceByUuid200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: GetInvoiceByUuid200ApplicationJsonMeta;
}


export class GetInvoiceByUuid401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetInvoiceByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getInvoiceByUuid200ApplicationJsonObject?: GetInvoiceByUuid200ApplicationJson;

  @Metadata()
  getInvoiceByUuid401ApplicationJsonObject?: GetInvoiceByUuid401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
