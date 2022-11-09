import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDropletBandwidthMetricsDirectionEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
}

export enum GetDropletBandwidthMetricsInterfaceEnum {
    Private = "private"
,    Public = "public"
}


export class GetDropletBandwidthMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: GetDropletBandwidthMetricsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=interface" })
  interface: GetDropletBandwidthMetricsInterfaceEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletBandwidthMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletBandwidthMetricsQueryParams;
}


export class GetDropletBandwidthMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletBandwidthMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletBandwidthMetrics200ApplicationJsonDataResult })
  result: GetDropletBandwidthMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletBandwidthMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletBandwidthMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletBandwidthMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletBandwidthMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletBandwidthMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletBandwidthMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletBandwidthMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletBandwidthMetrics200ApplicationJsonObject?: GetDropletBandwidthMetrics200ApplicationJson;

  @Metadata()
  getDropletBandwidthMetrics401ApplicationJsonObject?: GetDropletBandwidthMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
