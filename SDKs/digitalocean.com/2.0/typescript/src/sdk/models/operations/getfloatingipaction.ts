import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFloatingIpActionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action_id" })
  actionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=floating_ip" })
  floatingIp: string;
}


export class GetFloatingIpActionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFloatingIpActionPathParams;
}


export class GetFloatingIpAction401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetFloatingIpActionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFloatingIpAction200ApplicationJsonAny?: any;

  @Metadata()
  getFloatingIpAction401ApplicationJsonObject?: GetFloatingIpAction401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
