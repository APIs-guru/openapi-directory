import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=entry_port" })
  entryPort: number;

  @Metadata({ data: "json, name=entry_protocol" })
  entryProtocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum;

  @Metadata({ data: "json, name=target_port" })
  targetPort: number;

  @Metadata({ data: "json, name=target_protocol" })
  targetProtocol: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum;

  @Metadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @Metadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @Metadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}


export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available: boolean;

  @Metadata({ data: "json, name=features" })
  features: any;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sizes" })
  sizes: any;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum {
    LbSmall = "lb-small"
,    LbMedium = "lb-medium"
,    LbLarge = "lb-large"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum {
    New = "new"
,    Active = "active"
,    Errored = "errored"
}

export enum Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum {
    Cookies = "cookies"
,    None = "none"
}


// Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @Metadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @Metadata({ data: "json, name=type" })
  type?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum;
}


export class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds?: number[];

  @Metadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @Metadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @Metadata({ data: "json, name=forwarding_rules", elemType: shared.Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules })
  forwardingRules: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules[];

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @Metadata({ data: "json, name=region" })
  region?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion;

  @Metadata({ data: "json, name=size" })
  size?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum;

  @Metadata({ data: "json, name=status" })
  status?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}
