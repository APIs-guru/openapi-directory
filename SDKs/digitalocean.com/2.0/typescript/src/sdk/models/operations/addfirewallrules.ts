import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
  firewallId: string;
}

export enum AddFirewallRulesRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class AddFirewallRulesRequestBodyInboundRulesSources extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses" })
  addresses?: string[];

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @Metadata({ data: "json, name=kubernetes_ids" })
  kubernetesIds?: string[];

  @Metadata({ data: "json, name=load_balancer_uids" })
  loadBalancerUids?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class AddFirewallRulesRequestBodyInboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: AddFirewallRulesRequestBodyInboundRulesProtocolEnum;

  @Metadata({ data: "json, name=sources" })
  sources: AddFirewallRulesRequestBodyInboundRulesSources;
}

export enum AddFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class AddFirewallRulesRequestBodyOutboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: AddFirewallRulesRequestBodyOutboundRulesProtocolEnum;
}


export class AddFirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound_rules", elemType: operations.AddFirewallRulesRequestBodyInboundRules })
  inboundRules?: AddFirewallRulesRequestBodyInboundRules[];

  @Metadata({ data: "json, name=outbound_rules", elemType: operations.AddFirewallRulesRequestBodyOutboundRules })
  outboundRules?: AddFirewallRulesRequestBodyOutboundRules[];
}


export class AddFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddFirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AddFirewallRulesRequestBody;
}


export class AddFirewallRules401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addFirewallRules401ApplicationJsonObject?: AddFirewallRules401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
