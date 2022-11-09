import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConnectionPoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pool_name" })
  poolName: string;
}


export class GetConnectionPoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConnectionPoolPathParams;
}


export class GetConnectionPool200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pool" })
  pool: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems;
}


export class GetConnectionPool401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetConnectionPoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getConnectionPool200ApplicationJsonObject?: GetConnectionPool200ApplicationJson;

  @Metadata()
  getConnectionPool401ApplicationJsonObject?: GetConnectionPool401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
