import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletMemoryAvailableMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletMemoryAvailableMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletMemoryAvailableMetricsQueryParams;
}


export class GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletMemoryAvailableMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult })
  result: GetDropletMemoryAvailableMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletMemoryAvailableMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletMemoryAvailableMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletMemoryAvailableMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletMemoryAvailableMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletMemoryAvailableMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletMemoryAvailableMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletMemoryAvailableMetrics200ApplicationJsonObject?: GetDropletMemoryAvailableMetrics200ApplicationJson;

  @Metadata()
  getDropletMemoryAvailableMetrics401ApplicationJsonObject?: GetDropletMemoryAvailableMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
