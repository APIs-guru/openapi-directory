import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAllActionsQueryParams;
}


export class ListAllActions200ApplicationJsonActionsRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=features" })
  features: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sizes" })
  sizes: any;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}

export enum ListAllActions200ApplicationJsonActionsStatusEnum {
    InProgress = "in-progress"
,    Completed = "completed"
,    Errored = "errored"
}


export class ListAllActions200ApplicationJsonActions extends SpeakeasyBase {
  @Metadata({ data: "json, name=completed_at" })
  completedAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=region" })
  region?: ListAllActions200ApplicationJsonActionsRegion;

  @Metadata({ data: "json, name=region_slug" })
  regionSlug?: Map<string, any>;

  @Metadata({ data: "json, name=resource_id" })
  resourceId?: number;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ListAllActions200ApplicationJsonActionsStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ListAllActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllActions200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllActions200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllActions200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllActions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.ListAllActions200ApplicationJsonActions })
  actions?: ListAllActions200ApplicationJsonActions[];

  @Metadata({ data: "json, name=links" })
  links?: ListAllActions200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllActions200ApplicationJsonMeta;
}


export class ListAllActions401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllActions200ApplicationJsonObject?: ListAllActions200ApplicationJson;

  @Metadata()
  listAllActions401ApplicationJsonObject?: ListAllActions401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
