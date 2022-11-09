import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllDomainRecordsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domain_name" })
  domainName: string;
}

export enum ListAllDomainRecordsTypeEnum {
    A = "A"
,    Aaaa = "AAAA"
,    Caa = "CAA"
,    Cname = "CNAME"
,    Mx = "MX"
,    Ns = "NS"
,    Soa = "SOA"
,    Srv = "SRV"
,    Txt = "TXT"
}


export class ListAllDomainRecordsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ListAllDomainRecordsTypeEnum;
}


export class ListAllDomainRecordsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListAllDomainRecordsPathParams;

  @Metadata()
  queryParams: ListAllDomainRecordsQueryParams;
}


export class ListAllDomainRecords200ApplicationJsonDomainRecords extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=flags" })
  flags?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}


export class ListAllDomainRecords200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllDomainRecords200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllDomainRecords200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllDomainRecords200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllDomainRecords200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllDomainRecords200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain_records", elemType: operations.ListAllDomainRecords200ApplicationJsonDomainRecords })
  domainRecords?: ListAllDomainRecords200ApplicationJsonDomainRecords[];

  @Metadata({ data: "json, name=links" })
  links?: ListAllDomainRecords200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllDomainRecords200ApplicationJsonMeta;
}


export class ListAllDomainRecords401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllDomainRecordsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllDomainRecords200ApplicationJsonObject?: ListAllDomainRecords200ApplicationJson;

  @Metadata()
  listAllDomainRecords401ApplicationJsonObject?: ListAllDomainRecords401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
