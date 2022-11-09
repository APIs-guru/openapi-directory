import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletFilesystemSizeMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletFilesystemSizeMetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletFilesystemSizeMetricsQueryParams;
}


export class GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletFilesystemSizeMetrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletFilesystemSizeMetrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult })
  result: GetDropletFilesystemSizeMetrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletFilesystemSizeMetrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletFilesystemSizeMetrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletFilesystemSizeMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletFilesystemSizeMetrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletFilesystemSizeMetrics200ApplicationJsonStatusEnum;
}


export class GetDropletFilesystemSizeMetrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletFilesystemSizeMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletFilesystemSizeMetrics200ApplicationJsonObject?: GetDropletFilesystemSizeMetrics200ApplicationJson;

  @Metadata()
  getDropletFilesystemSizeMetrics401ApplicationJsonObject?: GetDropletFilesystemSizeMetrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
