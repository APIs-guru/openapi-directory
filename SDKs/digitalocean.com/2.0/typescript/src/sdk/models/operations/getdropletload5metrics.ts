import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletLoad5MetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletLoad5MetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletLoad5MetricsQueryParams;
}


export class GetDropletLoad5Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletLoad5Metrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletLoad5Metrics200ApplicationJsonDataResult })
  result: GetDropletLoad5Metrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletLoad5Metrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletLoad5Metrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletLoad5Metrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletLoad5Metrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletLoad5Metrics200ApplicationJsonStatusEnum;
}


export class GetDropletLoad5Metrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletLoad5MetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletLoad5Metrics200ApplicationJsonObject?: GetDropletLoad5Metrics200ApplicationJson;

  @Metadata()
  getDropletLoad5Metrics401ApplicationJsonObject?: GetDropletLoad5Metrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
