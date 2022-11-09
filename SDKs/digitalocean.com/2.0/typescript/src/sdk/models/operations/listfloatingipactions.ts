import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListFloatingIpActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=floating_ip" })
  floatingIp: string;
}


export class ListFloatingIpActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListFloatingIpActionsPathParams;
}


export class ListFloatingIpActions200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListFloatingIpActions200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListFloatingIpActions200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListFloatingIpActions200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListFloatingIpActions200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListFloatingIpActions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems })
  actions?: shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems[];

  @Metadata({ data: "json, name=links" })
  links?: ListFloatingIpActions200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListFloatingIpActions200ApplicationJsonMeta;
}


export class ListFloatingIpActions401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListFloatingIpActionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listFloatingIpActions200ApplicationJsonObject?: ListFloatingIpActions200ApplicationJson;

  @Metadata()
  listFloatingIpActions401ApplicationJsonObject?: ListFloatingIpActions401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
