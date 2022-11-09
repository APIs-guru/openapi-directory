import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAllVolumeActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volume_id" })
  volumeId: string;
}


export class ListAllVolumeActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAllVolumeActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListAllVolumeActionsPathParams;

  @Metadata()
  queryParams: ListAllVolumeActionsQueryParams;
}


export class ListAllVolumeActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAllVolumeActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAllVolumeActions200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAllVolumeActions200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAllVolumeActions200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAllVolumeActions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction })
  actions?: shared.Onev21volumes1actionsPostResponses202ContentApplication1jsonSchemaPropertiesAction[];

  @Metadata({ data: "json, name=links" })
  links?: ListAllVolumeActions200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAllVolumeActions200ApplicationJsonMeta;
}


export class ListAllVolumeActions401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAllVolumeActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAllVolumeActions200ApplicationJsonObject?: ListAllVolumeActions200ApplicationJson;

  @Metadata()
  listAllVolumeActions401ApplicationJsonObject?: ListAllVolumeActions401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
