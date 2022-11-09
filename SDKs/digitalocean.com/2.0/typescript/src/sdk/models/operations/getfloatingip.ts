import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFloatingIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=floating_ip" })
  floatingIp: string;
}


export class GetFloatingIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFloatingIpPathParams;
}


export class GetFloatingIp200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=floating_ip" })
  floatingIp?: shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems;
}


export class GetFloatingIp401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetFloatingIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFloatingIp200ApplicationJsonObject?: GetFloatingIp200ApplicationJson;

  @Metadata()
  getFloatingIp401ApplicationJsonObject?: GetFloatingIp401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
