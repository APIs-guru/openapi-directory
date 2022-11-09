import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListVolumeSnapshotsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volume_id" })
  volumeId: string;
}


export class ListVolumeSnapshotsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListVolumeSnapshotsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListVolumeSnapshotsPathParams;

  @Metadata()
  queryParams: ListVolumeSnapshotsQueryParams;
}


export class ListVolumeSnapshots200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListVolumeSnapshots200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListVolumeSnapshots200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListVolumeSnapshots200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListVolumeSnapshots200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListVolumeSnapshots200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListVolumeSnapshots200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListVolumeSnapshots200ApplicationJsonMeta;

  @Metadata({ data: "json, name=snapshots", elemType: shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems })
  snapshots?: shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[];
}


export class ListVolumeSnapshots401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListVolumeSnapshotsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listVolumeSnapshots200ApplicationJsonObject?: ListVolumeSnapshots200ApplicationJson;

  @Metadata()
  listVolumeSnapshots401ApplicationJsonObject?: ListVolumeSnapshots401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
