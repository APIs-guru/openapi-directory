import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string[];

  @Metadata({ data: "json, name=slack", elemType: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack })
  slack: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlertsSlack[];
}

export enum Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum {
    GreaterThan = "GreaterThan"
,    LessThan = "LessThan"
}

export enum Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum {
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

export enum Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum {
    Fivem = "5m"
,    Tenm = "10m"
,    Thirtym = "30m"
,    Oneh = "1h"
}


export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsAlerts;

  @Metadata({ data: "json, name=compare" })
  compare: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsCompareEnum;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=entities" })
  entities: string[];

  @Metadata({ data: "json, name=tags" })
  tags: string[];

  @Metadata({ data: "json, name=type" })
  type: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsTypeEnum;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;

  @Metadata({ data: "json, name=value" })
  value: number;

  @Metadata({ data: "json, name=window" })
  window: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsWindowEnum;
}
