import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewall_id" })
  firewallId: string;
}

export enum UpdateFirewallRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class UpdateFirewallRequestBodyInboundRulesSources extends SpeakeasyBase {
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


export class UpdateFirewallRequestBodyInboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateFirewallRequestBodyInboundRulesProtocolEnum;

  @Metadata({ data: "json, name=sources" })
  sources: UpdateFirewallRequestBodyInboundRulesSources;
}

export enum UpdateFirewallRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class UpdateFirewallRequestBodyOutboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateFirewallRequestBodyOutboundRulesProtocolEnum;
}


export class UpdateFirewallRequestBodyPendingChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId?: number;

  @Metadata({ data: "json, name=removing" })
  removing?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: string;
}

export enum UpdateFirewallRequestBodyStatusEnum {
    Waiting = "waiting"
,    Succeeded = "succeeded"
,    Failed = "failed"
}


export class UpdateFirewallRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inbound_rules", elemType: operations.UpdateFirewallRequestBodyInboundRules })
  inboundRules?: UpdateFirewallRequestBodyInboundRules[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outbound_rules", elemType: operations.UpdateFirewallRequestBodyOutboundRules })
  outboundRules?: UpdateFirewallRequestBodyOutboundRules[];

  @Metadata({ data: "json, name=pending_changes", elemType: operations.UpdateFirewallRequestBodyPendingChanges })
  pendingChanges?: UpdateFirewallRequestBodyPendingChanges[];

  @Metadata({ data: "json, name=status" })
  status?: UpdateFirewallRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateFirewallRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateFirewallPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateFirewallRequestBody;
}


export class UpdateFirewall401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateFirewall200ApplicationJsonAny?: any;

  @Metadata()
  updateFirewall401ApplicationJsonObject?: UpdateFirewall401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
