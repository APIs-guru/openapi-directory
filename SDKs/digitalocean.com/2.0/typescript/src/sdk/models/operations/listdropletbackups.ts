import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDropletBackupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletBackupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDropletBackupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDropletBackupsPathParams;

  @Metadata()
  queryParams: ListDropletBackupsQueryParams;
}

export enum ListDropletBackups200ApplicationJsonBackupsTypeEnum {
    Snapshot = "snapshot"
,    Backup = "backup"
}


export class ListDropletBackups200ApplicationJsonBackups extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=min_disk_size" })
  minDiskSize: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=regions" })
  regions: string[];

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;

  @Metadata({ data: "json, name=type" })
  type: ListDropletBackups200ApplicationJsonBackupsTypeEnum;
}


export class ListDropletBackups200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletBackups200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletBackups200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletBackups200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletBackups200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletBackups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups", elemType: operations.ListDropletBackups200ApplicationJsonBackups })
  backups?: ListDropletBackups200ApplicationJsonBackups[];

  @Metadata({ data: "json, name=links" })
  links?: ListDropletBackups200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListDropletBackups200ApplicationJsonMeta;
}


export class ListDropletBackups401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDropletBackups200ApplicationJsonObject?: ListDropletBackups200ApplicationJson;

  @Metadata()
  listDropletBackups401ApplicationJsonObject?: ListDropletBackups401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
