import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class DeleteCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteCollection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: DeleteCollection200ApplicationJsonCollection;
}


export class DeleteCollection404ApplicationJsonErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: string;
}


export class DeleteCollection404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: DeleteCollection404ApplicationJsonErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class DeleteCollection404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: DeleteCollection404ApplicationJsonError;
}


export class DeleteCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCollectionPathParams;
}


export class DeleteCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteCollection200ApplicationJsonObject?: DeleteCollection200ApplicationJson;

  @SpeakeasyMetadata()
  deleteCollection404ApplicationJsonObject?: DeleteCollection404ApplicationJson;
}
