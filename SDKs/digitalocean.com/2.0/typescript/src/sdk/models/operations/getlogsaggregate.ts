import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLogsAggregatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: string;
}


export class GetLogsAggregateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=follow" })
  follow?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pod_connection_timeout" })
  podConnectionTimeout?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum;
}


export class GetLogsAggregateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLogsAggregatePathParams;

  @Metadata()
  queryParams: GetLogsAggregateQueryParams;
}


export class GetLogsAggregate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetLogsAggregateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLogsAggregate401ApplicationJsonObject?: GetLogsAggregate401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;

  @Metadata()
  onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema?: shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema;
}
