import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDropletFirewallsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=droplet_id" })
  dropletId: number;
}


export class ListDropletFirewallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDropletFirewallsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDropletFirewallsPathParams;

  @Metadata()
  queryParams: ListDropletFirewallsQueryParams;
}

export enum ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources extends SpeakeasyBase {
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


export class ListDropletFirewalls200ApplicationJsonFirewallsInboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesProtocolEnum;

  @Metadata({ data: "json, name=sources" })
  sources: ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources;
}

export enum ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
}


export class ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinations" })
  destinations: shared.Onev21droplets1Percent7BdropletIdPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0;

  @Metadata({ data: "json, name=ports" })
  ports: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRulesProtocolEnum;
}


export class ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=droplet_id" })
  dropletId?: number;

  @Metadata({ data: "json, name=removing" })
  removing?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: string;
}

export enum ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum {
    Waiting = "waiting"
,    Succeeded = "succeeded"
,    Failed = "failed"
}


export class ListDropletFirewalls200ApplicationJsonFirewalls extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inbound_rules", elemType: operations.ListDropletFirewalls200ApplicationJsonFirewallsInboundRules })
  inboundRules?: ListDropletFirewalls200ApplicationJsonFirewallsInboundRules[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outbound_rules", elemType: operations.ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules })
  outboundRules?: ListDropletFirewalls200ApplicationJsonFirewallsOutboundRules[];

  @Metadata({ data: "json, name=pending_changes", elemType: operations.ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges })
  pendingChanges?: ListDropletFirewalls200ApplicationJsonFirewallsPendingChanges[];

  @Metadata({ data: "json, name=status" })
  status?: ListDropletFirewalls200ApplicationJsonFirewallsStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class ListDropletFirewalls200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListDropletFirewalls200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListDropletFirewalls200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListDropletFirewalls200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListDropletFirewalls200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListDropletFirewalls200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewalls", elemType: operations.ListDropletFirewalls200ApplicationJsonFirewalls })
  firewalls?: ListDropletFirewalls200ApplicationJsonFirewalls[];

  @Metadata({ data: "json, name=links" })
  links?: ListDropletFirewalls200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListDropletFirewalls200ApplicationJsonMeta;
}


export class ListDropletFirewalls401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDropletFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDropletFirewalls200ApplicationJsonObject?: ListDropletFirewalls200ApplicationJson;

  @Metadata()
  listDropletFirewalls401ApplicationJsonObject?: ListDropletFirewalls401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
