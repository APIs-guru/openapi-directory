import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SyncRelationsWithSchemaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entityId" })
  entityId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=entityType" })
  entityType: string;
}


export class SyncRelationsWithSchemaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SyncRelationsWithSchemaPathParams;
}


export class SyncRelationsWithSchema200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}


export class SyncRelationsWithSchema400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SyncRelationsWithSchema400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: SyncRelationsWithSchema400ApplicationJsonError;
}


export class SyncRelationsWithSchemaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  syncRelationsWithSchema200ApplicationJsonObject?: SyncRelationsWithSchema200ApplicationJson;

  @Metadata()
  syncRelationsWithSchema400ApplicationJsonObject?: SyncRelationsWithSchema400ApplicationJson;
}
