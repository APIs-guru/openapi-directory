import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDefaultProjectResources200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListDefaultProjectResources200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDefaultProjectResources200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDefaultProjectResources200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDefaultProjectResources200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


// ListDefaultProjectResources200ApplicationJsonResourcesLinks
/** 
 * The links object contains the `self` object, which contains the resource relationship.
**/
export class ListDefaultProjectResources200ApplicationJsonResourcesLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}

export enum ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum {
    Ok = "ok"
,    NotFound = "not_found"
,    Assigned = "assigned"
,    AlreadyAssigned = "already_assigned"
,    ServiceDown = "service_down"
}


export class ListDefaultProjectResources200ApplicationJsonResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigned_at" })
  assignedAt?: Date;

  @Metadata({ data: "json, name=links" })
  links?: ListDefaultProjectResources200ApplicationJsonResourcesLinks;

  @Metadata({ data: "json, name=status" })
  status?: ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum;

  @Metadata({ data: "json, name=urn" })
  urn?: string;
}


export class ListDefaultProjectResources200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListDefaultProjectResources200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListDefaultProjectResources200ApplicationJsonMeta;

  @Metadata({ data: "json, name=resources", elemType: operations.ListDefaultProjectResources200ApplicationJsonResources })
  resources?: ListDefaultProjectResources200ApplicationJsonResources[];
}


export class ListDefaultProjectResources401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDefaultProjectResourcesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDefaultProjectResources200ApplicationJsonObject?: ListDefaultProjectResources200ApplicationJson;

  @Metadata()
  listDefaultProjectResources401ApplicationJsonObject?: ListDefaultProjectResources401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
