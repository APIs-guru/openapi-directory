import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletMemoryFreeMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletMemoryFreeMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletMemoryFreeMetricsQueryParams;
}


export class GetDropletMemoryFreeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletMemoryFreeMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletMemoryFreeMetrics200ApplicationJsonDataResult })
  result: GetDropletMemoryFreeMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletMemoryFreeMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletMemoryFreeMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletMemoryFreeMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletMemoryFreeMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletMemoryFreeMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletMemoryFreeMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletMemoryFreeMetrics200ApplicationJsonObject?: GetDropletMemoryFreeMetrics200ApplicationJson;

  @Metadata()
  getDropletMemoryFreeMetrics401ApplicationJsonObject?: GetDropletMemoryFreeMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
