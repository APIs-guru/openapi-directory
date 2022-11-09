import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAllSnapshotsResourceTypeEnum {
    Droplet = "droplet"
,    Volume = "volume"
}


export class ListAllSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource_type" })
  resourceType?: ListAllSnapshotsResourceTypeEnum;
}


export class ListAllSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAllSnapshotsQueryParams;
}


export class ListAllSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllSnapshots200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}

export enum ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum {
    Droplet = "droplet"
,    Volume = "volume"
}


export class ListAllSnapshots200ApplicationJsonSnapshots extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=regions" })
  regions: string[];

  @Metadata({ data: "json, name=resource_id" })
  resourceId: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType: ListAllSnapshots200ApplicationJsonSnapshotsResourceTypeEnum;

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @Metadata({ data: "json, name=tags" })
  tags: string[];
}


export class ListAllSnapshots200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListAllSnapshots200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllSnapshots200ApplicationJsonMeta;

  @Metadata({ data: "json, name=snapshots", elemType: operations.ListAllSnapshots200ApplicationJsonSnapshots })
  snapshots?: ListAllSnapshots200ApplicationJsonSnapshots[];
}


export class ListAllSnapshots401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllSnapshots200ApplicationJsonObject?: ListAllSnapshots200ApplicationJson;

  @Metadata()
  listAllSnapshots401ApplicationJsonObject?: ListAllSnapshots401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
