import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSqlModePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class GetSqlModeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSqlModePathParams;
}


export class GetSqlMode200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=sql_mode" })
  sqlMode: string;
}


export class GetSqlMode401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetSqlModeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSqlMode200ApplicationJsonObject?: GetSqlMode200ApplicationJson;

  @Metadata()
  getSqlMode401ApplicationJsonObject?: GetSqlMode401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
