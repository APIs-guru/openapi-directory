import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletLoad15MetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletLoad15MetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletLoad15MetricsQueryParams;
}


export class GetDropletLoad15Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletLoad15Metrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletLoad15Metrics200ApplicationJsonDataResult })
  result: GetDropletLoad15Metrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletLoad15Metrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletLoad15Metrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletLoad15Metrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletLoad15Metrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletLoad15Metrics200ApplicationJsonStatusEnum;
}


export class GetDropletLoad15Metrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletLoad15MetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletLoad15Metrics200ApplicationJsonObject?: GetDropletLoad15Metrics200ApplicationJson;

  @Metadata()
  getDropletLoad15Metrics401ApplicationJsonObject?: GetDropletLoad15Metrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
