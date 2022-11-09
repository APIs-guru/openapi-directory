import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDropletLoad1MetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=host_id" })
  hostId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;
}


export class GetDropletLoad1MetricsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDropletLoad1MetricsQueryParams;
}


export class GetDropletLoad1Metrics200ApplicationJsonDataResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric: Map<string, string>;

  @Metadata({ data: "json, name=values" })
  values: any[][];
}

export enum GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum {
    Matrix = "matrix"
}


export class GetDropletLoad1Metrics200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=result", elemType: operations.GetDropletLoad1Metrics200ApplicationJsonDataResult })
  result: GetDropletLoad1Metrics200ApplicationJsonDataResult[];

  @Metadata({ data: "json, name=resultType" })
  resultType: GetDropletLoad1Metrics200ApplicationJsonDataResultTypeEnum;
}

export enum GetDropletLoad1Metrics200ApplicationJsonStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GetDropletLoad1Metrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetDropletLoad1Metrics200ApplicationJsonData;

  @Metadata({ data: "json, name=status" })
  status: GetDropletLoad1Metrics200ApplicationJsonStatusEnum;
}


export class GetDropletLoad1Metrics401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetDropletLoad1MetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDropletLoad1Metrics200ApplicationJsonObject?: GetDropletLoad1Metrics200ApplicationJson;

  @Metadata()
  getDropletLoad1Metrics401ApplicationJsonObject?: GetDropletLoad1Metrics401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
