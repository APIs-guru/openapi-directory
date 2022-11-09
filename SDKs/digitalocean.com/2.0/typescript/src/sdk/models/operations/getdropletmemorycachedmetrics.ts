import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletMemoryCachedMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletMemoryCachedMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletMemoryCachedMetricsQueryParams;
}


export class GetDropletMemoryCachedMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletMemoryCachedMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletMemoryCachedMetrics200ApplicationJsonDataResult })
  result: GetDropletMemoryCachedMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletMemoryCachedMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletMemoryCachedMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletMemoryCachedMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletMemoryCachedMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletMemoryCachedMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletMemoryCachedMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletMemoryCachedMetrics200ApplicationJsonObject?: GetDropletMemoryCachedMetrics200ApplicationJson;

  @Metadata()
  getDropletMemoryCachedMetrics401ApplicationJsonObject?: GetDropletMemoryCachedMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
