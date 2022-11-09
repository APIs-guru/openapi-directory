import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddConnectionPoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class AddConnectionPoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddConnectionPoolPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems;
}


export class AddConnectionPool201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pool" })
  pool: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems;
}


export class AddConnectionPool401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class AddConnectionPoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addConnectionPool201ApplicationJsonObject?: AddConnectionPool201ApplicationJson;

  @Metadata()
  addConnectionPool401ApplicationJsonObject?: AddConnectionPool401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
