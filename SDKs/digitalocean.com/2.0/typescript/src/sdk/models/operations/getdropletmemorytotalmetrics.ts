import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletMemoryTotalMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletMemoryTotalMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletMemoryTotalMetricsQueryParams;
}


export class GetDropletMemoryTotalMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletMemoryTotalMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletMemoryTotalMetrics200ApplicationJsonDataResult })
  result: GetDropletMemoryTotalMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletMemoryTotalMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletMemoryTotalMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletMemoryTotalMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletMemoryTotalMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletMemoryTotalMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletMemoryTotalMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletMemoryTotalMetrics200ApplicationJsonObject?: GetDropletMemoryTotalMetrics200ApplicationJson;

  @Metadata()
  getDropletMemoryTotalMetrics401ApplicationJsonObject?: GetDropletMemoryTotalMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
