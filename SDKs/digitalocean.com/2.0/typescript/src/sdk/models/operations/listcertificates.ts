import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCertificatesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListCertificatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCertificatesQueryParams;
}

export enum ListCertificates200ApplicationJsonCertificatesStateEnum {
    Pending = "pending"
,    Verified = "verified"
,    Error = "error"
}

export enum ListCertificates200ApplicationJsonCertificatesTypeEnum {
    Custom = "custom"
,    LetsEncrypt = "lets_encrypt"
}


export class ListCertificates200ApplicationJsonCertificates extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=dns_names" })
  dnsNames?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=not_after" })
  notAfter?: Date;

  @Metadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @Metadata({ data: "json, name=state" })
  state?: ListCertificates200ApplicationJsonCertificatesStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: ListCertificates200ApplicationJsonCertificatesTypeEnum;
}


export class ListCertificates200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListCertificates200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListCertificates200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListCertificates200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListCertificates200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListCertificates200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificates", elemType: operations.ListCertificates200ApplicationJsonCertificates })
  certificates?: ListCertificates200ApplicationJsonCertificates[];

  @Metadata({ data: "json, name=links" })
  links?: ListCertificates200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListCertificates200ApplicationJsonMeta;
}


export class ListCertificates401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListCertificatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listCertificates200ApplicationJsonObject?: ListCertificates200ApplicationJson;

  @Metadata()
  listCertificates401ApplicationJsonObject?: ListCertificates401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
