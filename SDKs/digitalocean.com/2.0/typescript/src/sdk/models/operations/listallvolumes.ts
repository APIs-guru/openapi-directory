import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllVolumesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=region" })
  region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
}


export class ListAllVolumesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAllVolumesQueryParams;
}


export class ListAllVolumes200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllVolumes200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllVolumes200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllVolumes200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllVolumes200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllVolumes200ApplicationJsonVolumesRegion extends SpeakeasyBase {
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


export class ListAllVolumes200ApplicationJsonVolumes extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @Metadata({ data: "json, name=filesystem_label" })
  filesystemLabel?: string;

  @Metadata({ data: "json, name=filesystem_type" })
  filesystemType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: ListAllVolumes200ApplicationJsonVolumesRegion;

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class ListAllVolumes200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListAllVolumes200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllVolumes200ApplicationJsonMeta;

  @Metadata({ data: "json, name=volumes", elemType: operations.ListAllVolumes200ApplicationJsonVolumes })
  volumes: ListAllVolumes200ApplicationJsonVolumes[];
}


export class ListAllVolumes401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllVolumesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllVolumes200ApplicationJsonObject?: ListAllVolumes200ApplicationJson;

  @Metadata()
  listAllVolumes401ApplicationJsonObject?: ListAllVolumes401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
