import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListVpcMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=vpc_id" })
  vpcId: string;
}


export class ListVpcMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType?: string;
}


export class ListVpcMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListVpcMembersPathParams;

  @Metadata()
  queryParams: ListVpcMembersQueryParams;
}


export class ListVpcMembers200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListVpcMembers200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListVpcMembers200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


export class ListVpcMembers200ApplicationJsonMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=urn" })
  urn?: string;
}


// ListVpcMembers200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListVpcMembers200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListVpcMembers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListVpcMembers200ApplicationJsonLinks;

  @Metadata({ data: "json, name=members", elemType: operations.ListVpcMembers200ApplicationJsonMembers })
  members?: ListVpcMembers200ApplicationJsonMembers[];

  @Metadata({ data: "json, name=meta" })
  meta: ListVpcMembers200ApplicationJsonMeta;
}


export class ListVpcMembers401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListVpcMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listVpcMembers200ApplicationJsonObject?: ListVpcMembers200ApplicationJson;

  @Metadata()
  listVpcMembers401ApplicationJsonObject?: ListVpcMembers401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
