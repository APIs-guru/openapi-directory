import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListConnectionPoolsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class ListConnectionPoolsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListConnectionPoolsPathParams;
}


export class ListConnectionPools200ApplicationJsonPoolsConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


export class ListConnectionPools200ApplicationJsonPoolsPrivateConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


export class ListConnectionPools200ApplicationJsonPools extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: ListConnectionPools200ApplicationJsonPoolsConnection;

  @Metadata({ data: "json, name=db" })
  db: string;

  @Metadata({ data: "json, name=mode" })
  mode: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=private_connection" })
  privateConnection?: ListConnectionPools200ApplicationJsonPoolsPrivateConnection;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=user" })
  user: string;
}


export class ListConnectionPools200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=pools", elemType: operations.ListConnectionPools200ApplicationJsonPools })
  pools?: ListConnectionPools200ApplicationJsonPools[];
}


export class ListConnectionPools401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListConnectionPoolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listConnectionPools200ApplicationJsonObject?: ListConnectionPools200ApplicationJson;

  @Metadata()
  listConnectionPools401ApplicationJsonObject?: ListConnectionPools401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
