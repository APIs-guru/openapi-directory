import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddFirewallDropletsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
  firewallId: string;
}


export class AddFirewallDropletsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddFirewallDropletsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class AddFirewallDroplets401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddFirewallDropletsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addFirewallDroplets401ApplicationJsonObject?: AddFirewallDroplets401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
