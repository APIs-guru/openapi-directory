import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
  firewallId: string;
}

export enum DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class DeleteFirewallRulesRequestBodyInboundRulesSources extends SpeakeasyBase {
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


export class DeleteFirewallRulesRequestBodyInboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum;

  @Metadata({ data: "json, name=sources" })
  sources: DeleteFirewallRulesRequestBodyInboundRulesSources;
}

export enum DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class DeleteFirewallRulesRequestBodyOutboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum;
}


export class DeleteFirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound_rules", elemType: operations.DeleteFirewallRulesRequestBodyInboundRules })
  inboundRules?: DeleteFirewallRulesRequestBodyInboundRules[];

  @Metadata({ data: "json, name=outbound_rules", elemType: operations.DeleteFirewallRulesRequestBodyOutboundRules })
  outboundRules?: DeleteFirewallRulesRequestBodyOutboundRules[];
}


export class DeleteFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: DeleteFirewallRulesRequestBody;
}


export class DeleteFirewallRules401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class DeleteFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteFirewallRules401ApplicationJsonObject?: DeleteFirewallRules401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
