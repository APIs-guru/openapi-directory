import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAllKeysQueryParams;
}


export class ListAllKeys200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllKeys200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllKeys200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllKeys200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllKeys200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllKeys200ApplicationJsonSshKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey: string;
}


export class ListAllKeys200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListAllKeys200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllKeys200ApplicationJsonMeta;

  @Metadata({ data: "json, name=ssh_keys", elemType: operations.ListAllKeys200ApplicationJsonSshKeys })
  sshKeys?: ListAllKeys200ApplicationJsonSshKeys[];
}


export class ListAllKeys401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllKeys200ApplicationJsonObject?: ListAllKeys200ApplicationJson;

  @Metadata()
  listAllKeys401ApplicationJsonObject?: ListAllKeys401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
