import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletCpuMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletCpuMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletCpuMetricsQueryParams;
}


export class GetDropletCpuMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletCpuMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletCpuMetrics200ApplicationJsonDataResult })
  result: GetDropletCpuMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletCpuMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletCpuMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletCpuMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletCpuMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletCpuMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletCpuMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletCpuMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletCpuMetrics200ApplicationJsonObject?: GetDropletCpuMetrics200ApplicationJson;

  @Metadata()
  getDropletCpuMetrics401ApplicationJsonObject?: GetDropletCpuMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
