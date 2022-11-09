import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAlertPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListAlertPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAlertPoliciesQueryParams;
}


export class ListAlertPolicies200ApplicationJsonLinksPages1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;
}


export class ListAlertPolicies200ApplicationJsonLinksPages2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}


export class ListAlertPolicies200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=pages" })
  pages?: any;
}


// ListAlertPolicies200ApplicationJsonMeta
/** 
 * Information about the response itself.
**/
export class ListAlertPolicies200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class ListAlertPolicies200ApplicationJsonPoliciesAlerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string[];

  @Metadata({ data: "json, name=slack", elemType: operations.ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack })
  slack: ListAlertPolicies200ApplicationJsonPoliciesAlertsSlack[];
}

export enum ListAlertPolicies200ApplicationJsonPoliciesCompareEnum {
    GreaterThan = "GreaterThan"
,    LessThan = "LessThan"
}

export enum ListAlertPolicies200ApplicationJsonPoliciesTypeEnum {
    V1InsightsDropletLoad1 = "v1/insights/droplet/load_1"
,    V1InsightsDropletLoad5 = "v1/insights/droplet/load_5"
,    V1InsightsDropletLoad15 = "v1/insights/droplet/load_15"
,    V1InsightsDropletMemoryUtilizationPercent = "v1/insights/droplet/memory_utilization_percent"
,    V1InsightsDropletDiskUtilizationPercent = "v1/insights/droplet/disk_utilization_percent"
,    V1InsightsDropletCpu = "v1/insights/droplet/cpu"
,    V1InsightsDropletDiskRead = "v1/insights/droplet/disk_read"
,    V1InsightsDropletDiskWrite = "v1/insights/droplet/disk_write"
,    V1InsightsDropletPublicOutboundBandwidth = "v1/insights/droplet/public_outbound_bandwidth"
,    V1InsightsDropletPublicInboundBandwidth = "v1/insights/droplet/public_inbound_bandwidth"
,    V1InsightsDropletPrivateOutboundBandwidth = "v1/insights/droplet/private_outbound_bandwidth"
,    V1InsightsDropletPrivateInboundBandwidth = "v1/insights/droplet/private_inbound_bandwidth"
}

export enum ListAlertPolicies200ApplicationJsonPoliciesWindowEnum {
    Fivem = "5m"
,    Tenm = "10m"
,    Thirtym = "30m"
,    Oneh = "1h"
}


export class ListAlertPolicies200ApplicationJsonPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts: ListAlertPolicies200ApplicationJsonPoliciesAlerts;

  @Metadata({ data: "json, name=compare" })
  compare: ListAlertPolicies200ApplicationJsonPoliciesCompareEnum;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=entities" })
  entities: string[];

  @Metadata({ data: "json, name=tags" })
  tags: string[];

  @Metadata({ data: "json, name=type" })
  type: ListAlertPolicies200ApplicationJsonPoliciesTypeEnum;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;

  @Metadata({ data: "json, name=value" })
  value: number;

  @Metadata({ data: "json, name=window" })
  window: ListAlertPolicies200ApplicationJsonPoliciesWindowEnum;
}


export class ListAlertPolicies200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: ListAlertPolicies200ApplicationJsonLinks;

  @Metadata({ data: "json, name=meta" })
  meta: ListAlertPolicies200ApplicationJsonMeta;

  @Metadata({ data: "json, name=policies", elemType: operations.ListAlertPolicies200ApplicationJsonPolicies })
  policies: ListAlertPolicies200ApplicationJsonPolicies[];
}


export class ListAlertPolicies401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListAlertPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAlertPolicies200ApplicationJsonObject?: ListAlertPolicies200ApplicationJson;

  @Metadata()
  listAlertPolicies401ApplicationJsonObject?: ListAlertPolicies401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
