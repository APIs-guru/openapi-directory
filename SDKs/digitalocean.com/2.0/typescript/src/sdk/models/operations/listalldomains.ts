import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllDomains200ApplicationJsonDomains extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=zone_file" })
  zoneFile?: string;
}


export class ListAllDomains200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllDomains200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllDomains200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllDomains200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllDomains200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllDomains200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: operations.ListAllDomains200ApplicationJsonDomains })
  domains: ListAllDomains200ApplicationJsonDomains[];

  @Metadata({ data: "json, name=links" })
  links?: ListAllDomains200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllDomains200ApplicationJsonMeta;
}


export class ListAllDomains401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDomainsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllDomains200ApplicationJsonObject?: ListAllDomains200ApplicationJson;

  @Metadata()
  listAllDomains401ApplicationJsonObject?: ListAllDomains401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
