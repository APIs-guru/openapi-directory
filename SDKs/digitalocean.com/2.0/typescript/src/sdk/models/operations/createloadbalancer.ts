import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=entry_port" })
  entryPort: number;

  @Metadata({ data: "json, name=entry_protocol" })
  entryProtocol: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;

  @Metadata({ data: "json, name=target_port" })
  targetPort: number;

  @Metadata({ data: "json, name=target_protocol" })
  targetProtocol: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;

  @Metadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @Metadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @Metadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum {
    LbSmall = "lb-small"
,    LbMedium = "lb-medium"
,    LbLarge = "lb-large"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdStatusEnum {
    New = "new"
,    Active = "active"
,    Errored = "errored"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum {
    Cookies = "cookies"
,    None = "none"
}


// CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @Metadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @Metadata({ data: "json, name=type" })
  type?: CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
}


export class CreateLoadBalancerRequestBodyAssignDropletsById extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds: number[];

  @Metadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @Metadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @Metadata({ data: "json, name=forwarding_rules", elemType: operations.CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules })
  forwardingRules: CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[];

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @Metadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=size" })
  size?: CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;

  @Metadata({ data: "json, name=status" })
  status?: CreateLoadBalancerRequestBodyAssignDropletsByIdStatusEnum;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=entry_port" })
  entryPort: number;

  @Metadata({ data: "json, name=entry_protocol" })
  entryProtocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;

  @Metadata({ data: "json, name=target_port" })
  targetPort: number;

  @Metadata({ data: "json, name=target_protocol" })
  targetProtocol: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;

  @Metadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}


// CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @Metadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @Metadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum {
    LbSmall = "lb-small"
,    LbMedium = "lb-medium"
,    LbLarge = "lb-large"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum {
    New = "new"
,    Active = "active"
,    Errored = "errored"
}

export enum CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum {
    Cookies = "cookies"
,    None = "none"
}


// CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @Metadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @Metadata({ data: "json, name=type" })
  type?: CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
}


export class CreateLoadBalancerRequestBodyAssignDropletsByTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @Metadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @Metadata({ data: "json, name=forwarding_rules", elemType: operations.CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules })
  forwardingRules: CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[];

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=redirect_http_to_https" })
  redirectHttpToHttps?: boolean;

  @Metadata({ data: "json, name=region" })
  region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;

  @Metadata({ data: "json, name=size" })
  size?: CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;

  @Metadata({ data: "json, name=status" })
  status?: CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;

  @Metadata({ data: "json, name=tag" })
  tag: string;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class CreateLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class CreateLoadBalancer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateLoadBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createLoadBalancer202ApplicationJsonAny?: any;

  @Metadata()
  createLoadBalancer401ApplicationJsonObject?: CreateLoadBalancer401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
