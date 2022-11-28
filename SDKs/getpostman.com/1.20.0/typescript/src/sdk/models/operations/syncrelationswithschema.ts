import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SyncRelationsWithSchemaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityId" })
  entityId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entityType" })
  entityType: string;
}


export class SyncRelationsWithSchema200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class SyncRelationsWithSchema400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SyncRelationsWithSchema400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: SyncRelationsWithSchema400ApplicationJsonError;
}


export class SyncRelationsWithSchemaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SyncRelationsWithSchemaPathParams;
}


export class SyncRelationsWithSchemaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  syncRelationsWithSchema200ApplicationJsonObject?: SyncRelationsWithSchema200ApplicationJson;

  @SpeakeasyMetadata()
  syncRelationsWithSchema400ApplicationJsonObject?: SyncRelationsWithSchema400ApplicationJson;
}
