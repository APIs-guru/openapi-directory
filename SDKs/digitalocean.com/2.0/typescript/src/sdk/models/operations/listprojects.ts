import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListProjects200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListProjects200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListProjects200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListProjects200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListProjects200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}

export enum ListProjects200ApplicationJsonProjectsEnvironmentEnum {
    Development = "Development"
,    Staging = "Staging"
,    Production = "Production"
}


export class ListProjects200ApplicationJsonProjects extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: ListProjects200ApplicationJsonProjectsEnvironmentEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: number;

  @Metadata({ data: "json, name=owner_uuid" })
  ownerUuid?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ListProjects200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListProjects200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListProjects200ApplicationJsonMeta;

  @Metadata({ data: "json, name=projects", elemType: operations.ListProjects200ApplicationJsonProjects })
  projects?: ListProjects200ApplicationJsonProjects[];
}


export class ListProjects401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listProjects200ApplicationJsonObject?: ListProjects200ApplicationJson;

  @Metadata()
  listProjects401ApplicationJsonObject?: ListProjects401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
