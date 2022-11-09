import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProjectResourcesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;
}


export class ListProjectResourcesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListProjectResourcesPathParams;
}


export class ListProjectResources200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListProjectResources200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListProjectResources200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListProjectResources200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListProjectResources200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


// ListProjectResources200ApplicationJsonResourcesLinks
/** 
 * The links object contains the `self` object, which contains the resource relationship.
**/
export class ListProjectResources200ApplicationJsonResourcesLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}

export enum ListProjectResources200ApplicationJsonResourcesStatusEnum {
    Ok = "ok"
,    NotFound = "not_found"
,    Assigned = "assigned"
,    AlreadyAssigned = "already_assigned"
,    ServiceDown = "service_down"
}


export class ListProjectResources200ApplicationJsonResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigned_at" })
  assignedAt?: Date;

  @Metadata({ data: "json, name=links" })
  links?: ListProjectResources200ApplicationJsonResourcesLinks;

  @Metadata({ data: "json, name=status" })
  status?: ListProjectResources200ApplicationJsonResourcesStatusEnum;

  @Metadata({ data: "json, name=urn" })
  urn?: string;
}


export class ListProjectResources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListProjectResources200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListProjectResources200ApplicationJsonMeta;

  @Metadata({ data: "json, name=resources", elemType: operations.ListProjectResources200ApplicationJsonResources })
  resources?: ListProjectResources200ApplicationJsonResources[];
}


export class ListProjectResources401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListProjectResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listProjectResources200ApplicationJsonObject?: ListProjectResources200ApplicationJson;

  @Metadata()
  listProjectResources401ApplicationJsonObject?: ListProjectResources401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
