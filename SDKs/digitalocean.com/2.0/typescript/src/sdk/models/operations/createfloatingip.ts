import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFloatingIpRequestBodyAssignToDroplet extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId: number;
}


export class CreateFloatingIpRequestBodyReserveToRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region: string;
}


export class CreateFloatingIpRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateFloatingIp202ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems })
  actions?: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[];

  @Metadata({ data: "json, name=droplets", elemType: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems })
  droplets?: shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[];
}


export class CreateFloatingIp202ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=floating_ip" })
  floatingIp?: shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems;

  @Metadata({ data: "json, name=links" })
  links?: CreateFloatingIp202ApplicationJsonLinks;
}


export class CreateFloatingIp401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateFloatingIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createFloatingIp202ApplicationJsonObject?: CreateFloatingIp202ApplicationJson;

  @Metadata()
  createFloatingIp401ApplicationJsonObject?: CreateFloatingIp401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
