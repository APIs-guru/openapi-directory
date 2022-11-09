import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateAlertPolicyRequestBodyCompareEnum {
    GreaterThan = "GreaterThan"
,    LessThan = "LessThan"
}

export enum CreateAlertPolicyRequestBodyTypeEnum {
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

export enum CreateAlertPolicyRequestBodyWindowEnum {
    Fivem = "5m"
,    Tenm = "10m"
,    Thirtym = "30m"
,    Oneh = "1h"
}


export class CreateAlertPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts;

  @Metadata({ data: "json, name=compare" })
  compare: CreateAlertPolicyRequestBodyCompareEnum;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=entities" })
  entities: string[];

  @Metadata({ data: "json, name=tags" })
  tags: string[];

  @Metadata({ data: "json, name=type" })
  type: CreateAlertPolicyRequestBodyTypeEnum;

  @Metadata({ data: "json, name=value" })
  value: number;

  @Metadata({ data: "json, name=window" })
  window: CreateAlertPolicyRequestBodyWindowEnum;
}


export class CreateAlertPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateAlertPolicyRequestBody;
}


export class CreateAlertPolicy401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateAlertPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAlertPolicy401ApplicationJsonObject?: CreateAlertPolicy401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems?: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems;
}
