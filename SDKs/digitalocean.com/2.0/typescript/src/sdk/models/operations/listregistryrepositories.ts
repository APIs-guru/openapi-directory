import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRegistryRepositoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registry_name" })
  registryName: string;
}


export class ListRegistryRepositoriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListRegistryRepositoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListRegistryRepositoriesPathParams;

  @Metadata()
  queryParams: ListRegistryRepositoriesQueryParams;
}


export class ListRegistryRepositories200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListRegistryRepositories200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListRegistryRepositories200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListRegistryRepositories200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListRegistryRepositories200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=compressed_size_bytes" })
  compressedSizeBytes?: number;

  @Metadata({ data: "json, name=manifest_digest" })
  manifestDigest?: string;

  @Metadata({ data: "json, name=registry_name" })
  registryName?: string;

  @Metadata({ data: "json, name=repository_name" })
  repositoryName?: string;

  @Metadata({ data: "json, name=size_bytes" })
  sizeBytes?: number;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}


export class ListRegistryRepositories200ApplicationJsonRepositories extends SpeakeasyBase {
  @Metadata({ data: "json, name=latest_tag" })
  latestTag?: ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=registry_name" })
  registryName?: string;

  @Metadata({ data: "json, name=tag_count" })
  tagCount?: number;
}


export class ListRegistryRepositories200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListRegistryRepositories200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListRegistryRepositories200ApplicationJsonMeta;

  @Metadata({ data: "json, name=repositories", elemType: operations.ListRegistryRepositories200ApplicationJsonRepositories })
  repositories?: ListRegistryRepositories200ApplicationJsonRepositories[];
}


export class ListRegistryRepositories401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListRegistryRepositoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listRegistryRepositories200ApplicationJsonObject?: ListRegistryRepositories200ApplicationJson;

  @Metadata()
  listRegistryRepositories401ApplicationJsonObject?: ListRegistryRepositories401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
