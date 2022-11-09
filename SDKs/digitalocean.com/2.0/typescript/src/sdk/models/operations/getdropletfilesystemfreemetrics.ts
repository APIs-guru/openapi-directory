import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletFilesystemFreeMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletFilesystemFreeMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletFilesystemFreeMetricsQueryParams;
}


export class GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletFilesystemFreeMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult })
  result: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletFilesystemFreeMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletFilesystemFreeMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletFilesystemFreeMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletFilesystemFreeMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletFilesystemFreeMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletFilesystemFreeMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletFilesystemFreeMetrics200ApplicationJsonObject?: GetDropletFilesystemFreeMetrics200ApplicationJson;

  @Metadata()
  getDropletFilesystemFreeMetrics401ApplicationJsonObject?: GetDropletFilesystemFreeMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
