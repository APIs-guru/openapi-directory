import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDatabaseBackupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=database_cluster_uuid" })
  databaseClusterUuid: string;
}


export class ListDatabaseBackupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDatabaseBackupsPathParams;
}


export class ListDatabaseBackups200ApplicationJsonBackups extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=size_gigabytes" })
  sizeGigabytes: number;
}


export class ListDatabaseBackups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups", elemType: operations.ListDatabaseBackups200ApplicationJsonBackups })
  backups: ListDatabaseBackups200ApplicationJsonBackups[];
}


export class ListDatabaseBackups401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDatabaseBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  listDatabaseBackups200ApplicationJsonObject?: ListDatabaseBackups200ApplicationJson;

  @Metadata()
  listDatabaseBackups401ApplicationJsonObject?: ListDatabaseBackups401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
