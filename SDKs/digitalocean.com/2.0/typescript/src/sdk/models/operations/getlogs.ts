import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLogsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=component_name" })
  componentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=deployment_id" })
  deploymentId: string;
}

export enum GetLogsTypeEnum {
    Unspecified = "UNSPECIFIED"
,    Build = "BUILD"
,    Deploy = "DEPLOY"
,    Run = "RUN"
}


export class GetLogsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=follow" })
  follow?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pod_connection_timeout" })
  podConnectionTimeout?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetLogsTypeEnum;
}


export class GetLogsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLogsPathParams;

  @Metadata()
  queryParams: GetLogsQueryParams;
}


export class GetLogs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=historic_urls" })
  historicUrls?: string[];

  @Metadata({ data: "json, name=live_url" })
  liveUrl?: string;
}


export class GetLogs401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetLogsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLogs200ApplicationJsonObject?: GetLogs200ApplicationJson;

  @Metadata()
  getLogs401ApplicationJsonObject?: GetLogs401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
