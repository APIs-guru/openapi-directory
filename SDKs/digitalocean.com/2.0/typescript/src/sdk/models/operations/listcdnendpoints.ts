import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCdnEndpointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListCdnEndpointsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCdnEndpointsQueryParams;
}


export class ListCdnEndpoints200ApplicationJsonEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=custom_domain" })
  customDomain?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=origin" })
  origin: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}


export class ListCdnEndpoints200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListCdnEndpoints200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListCdnEndpoints200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListCdnEndpoints200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListCdnEndpoints200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListCdnEndpoints200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoints", elemType: operations.ListCdnEndpoints200ApplicationJsonEndpoints })
  endpoints?: ListCdnEndpoints200ApplicationJsonEndpoints[];

  @Metadata({ data: "json, name=links" })
  links?: ListCdnEndpoints200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListCdnEndpoints200ApplicationJsonMeta;
}


export class ListCdnEndpoints401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListCdnEndpointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listCdnEndpoints200ApplicationJsonObject?: ListCdnEndpoints200ApplicationJson;

  @Metadata()
  listCdnEndpoints401ApplicationJsonObject?: ListCdnEndpoints401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
