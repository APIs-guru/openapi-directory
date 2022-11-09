import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class DeleteCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCollectionPathParams;
}


export class DeleteCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteCollection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: DeleteCollection200ApplicationJsonCollection;
}


export class DeleteCollection404ApplicationJsonErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=item" })
  item?: string;
}


export class DeleteCollection404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: DeleteCollection404ApplicationJsonErrorDetails;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class DeleteCollection404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: DeleteCollection404ApplicationJsonError;
}


export class DeleteCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteCollection200ApplicationJsonObject?: DeleteCollection200ApplicationJson;

  @Metadata()
  deleteCollection404ApplicationJsonObject?: DeleteCollection404ApplicationJson;
}
