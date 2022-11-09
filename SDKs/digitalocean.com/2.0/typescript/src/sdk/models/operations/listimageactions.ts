import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListImageActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=image_id" })
  imageId: number;
}


export class ListImageActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListImageActionsPathParams;
}


export class ListImageActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListImageActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListImageActions200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListImageActions200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListImageActions200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListImageActions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems })
  actions?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[];

  @Metadata({ data: "json, name=links" })
  links?: ListImageActions200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListImageActions200ApplicationJsonMeta;
}


export class ListImageActions401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListImageActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listImageActions200ApplicationJsonObject?: ListImageActions200ApplicationJson;

  @Metadata()
  listImageActions401ApplicationJsonObject?: ListImageActions401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
