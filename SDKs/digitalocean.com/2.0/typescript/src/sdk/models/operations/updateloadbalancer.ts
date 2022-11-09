import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLoadBalancerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=lb_id" })
  lbId: string;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=entry_port" })
  entryPort: number;

  @Metadata({ data: "json, name=entry_protocol" })
  entryProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesEntryProtocolEnum;

  @Metadata({ data: "json, name=target_port" })
  targetPort: number;

  @Metadata({ data: "json, name=target_protocol" })
  targetProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRulesTargetProtocolEnum;

  @Metadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @Metadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @Metadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum {
    LbSmall = "lb-small"
,    LbMedium = "lb-medium"
,    LbLarge = "lb-large"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdStatusEnum {
    New = "new"
,    Active = "active"
,    Errored = "errored"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum {
    Cookies = "cookies"
,    None = "none"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @Metadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @Metadata({ data: "json, name=type" })
  type?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessionsTypeEnum;
}


export class UpdateLoadBalancerRequestBodyAssignDropletsById extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=droplet_ids" })
  dropletIds: number[];

  @Metadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @Metadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @Metadata({ data: "json, name=forwarding_rules", elemType: operations.UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules })
  forwardingRules: UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[];

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck;

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
  size?: UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum;

  @Metadata({ data: "json, name=status" })
  status?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStatusEnum;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum {
    RoundRobin = "round_robin"
,    LeastConnections = "least_connections"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum {
    Http = "http"
,    Https = "https"
,    Http2 = "http2"
,    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules
/** 
 * An object specifying a forwarding rule for a load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate_id" })
  certificateId?: string;

  @Metadata({ data: "json, name=entry_port" })
  entryPort: number;

  @Metadata({ data: "json, name=entry_protocol" })
  entryProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum;

  @Metadata({ data: "json, name=target_port" })
  targetPort: number;

  @Metadata({ data: "json, name=target_protocol" })
  targetProtocol: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum;

  @Metadata({ data: "json, name=tls_passthrough" })
  tlsPassthrough?: boolean;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum {
    Http = "http"
,    Https = "https"
,    Tcp = "tcp"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck
/** 
 * An object specifying health check settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=check_interval_seconds" })
  checkIntervalSeconds?: number;

  @Metadata({ data: "json, name=healthy_threshold" })
  healthyThreshold?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum;

  @Metadata({ data: "json, name=response_timeout_seconds" })
  responseTimeoutSeconds?: number;

  @Metadata({ data: "json, name=unhealthy_threshold" })
  unhealthyThreshold?: number;
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum {
    LbSmall = "lb-small"
,    LbMedium = "lb-medium"
,    LbLarge = "lb-large"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum {
    New = "new"
,    Active = "active"
,    Errored = "errored"
}

export enum UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum {
    Cookies = "cookies"
,    None = "none"
}


// UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions
/** 
 * An object specifying sticky sessions settings for the load balancer.
**/
export class UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cookie_name" })
  cookieName?: string;

  @Metadata({ data: "json, name=cookie_ttl_seconds" })
  cookieTtlSeconds?: number;

  @Metadata({ data: "json, name=type" })
  type?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum;
}


export class UpdateLoadBalancerRequestBodyAssignDropletsByTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=algorithm" })
  algorithm?: UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=enable_backend_keepalive" })
  enableBackendKeepalive?: boolean;

  @Metadata({ data: "json, name=enable_proxy_protocol" })
  enableProxyProtocol?: boolean;

  @Metadata({ data: "json, name=forwarding_rules", elemType: operations.UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules })
  forwardingRules: UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[];

  @Metadata({ data: "json, name=health_check" })
  healthCheck?: UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck;

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
  size?: UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum;

  @Metadata({ data: "json, name=status" })
  status?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum;

  @Metadata({ data: "json, name=sticky_sessions" })
  stickySessions?: UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions;

  @Metadata({ data: "json, name=tag" })
  tag: string;

  @Metadata({ data: "json, name=vpc_uuid" })
  vpcUuid?: string;
}


export class UpdateLoadBalancerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLoadBalancerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class UpdateLoadBalancer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class UpdateLoadBalancerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLoadBalancer200ApplicationJsonAny?: any;

  @Metadata()
  updateLoadBalancer401ApplicationJsonObject?: UpdateLoadBalancer401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
