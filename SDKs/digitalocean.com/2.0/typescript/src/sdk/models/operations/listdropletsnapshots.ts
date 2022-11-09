import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDropletSnapshotsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDropletSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDropletSnapshotsPathParams;

  @Metadata()
  queryParams: ListDropletSnapshotsQueryParams;
}


export class ListDropletSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletSnapshots200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletSnapshots200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListDropletSnapshots200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListDropletSnapshots200ApplicationJsonMeta;

  @Metadata({ data: "json, name=snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems })
  snapshots?: shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems[];
}


export class ListDropletSnapshots401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDropletSnapshots200ApplicationJsonObject?: ListDropletSnapshots200ApplicationJson;

  @Metadata()
  listDropletSnapshots401ApplicationJsonObject?: ListDropletSnapshots401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
