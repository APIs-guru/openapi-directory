import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateFirewallRequestBodyInboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class CreateFirewallRequestBodyInboundRulesSources extends SpeakeasyBase {
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


export class CreateFirewallRequestBodyInboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: CreateFirewallRequestBodyInboundRulesProtocolEnum;

  @Metadata({ data: "json, name=sources" })
  sources: CreateFirewallRequestBodyInboundRulesSources;
}

export enum CreateFirewallRequestBodyOutboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class CreateFirewallRequestBodyOutboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: CreateFirewallRequestBodyOutboundRulesProtocolEnum;
}


export class CreateFirewallRequestBodyPendingChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId?: number;

  @Metadata({ data: "json, name=removing" })
  removing?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: string;
}

export enum CreateFirewallRequestBodyStatusEnum {
    Waiting = "waiting"
,    Succeeded = "succeeded"
,    Failed = "failed"
}


export class CreateFirewallRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inbound_rules", elemType: operations.CreateFirewallRequestBodyInboundRules })
  inboundRules?: CreateFirewallRequestBodyInboundRules[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outbound_rules", elemType: operations.CreateFirewallRequestBodyOutboundRules })
  outboundRules?: CreateFirewallRequestBodyOutboundRules[];

  @Metadata({ data: "json, name=pending_changes", elemType: operations.CreateFirewallRequestBodyPendingChanges })
  pendingChanges?: CreateFirewallRequestBodyPendingChanges[];

  @Metadata({ data: "json, name=status" })
  status?: CreateFirewallRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateFirewallRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateFirewallRequestBody;
}


export class CreateFirewall401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createFirewall202ApplicationJsonAny?: any;

  @Metadata()
  createFirewall401ApplicationJsonObject?: CreateFirewall401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
