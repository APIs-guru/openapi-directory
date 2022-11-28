import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class UpdateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_postman_id" })
  postmanId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: UpdateCollectionRequestBodyCollectionItemItemRequestBody;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=header", elemType: UpdateCollectionRequestBodyCollectionItemItemRequestHeader })
  header?: UpdateCollectionRequestBodyCollectionItemItemRequestHeader[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: UpdateCollectionRequestBodyCollectionItemItemRequest;
}


export class UpdateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item", elemType: UpdateCollectionRequestBodyCollectionItemItem })
  item?: UpdateCollectionRequestBodyCollectionItemItem[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollectionRequestBodyCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: UpdateCollectionRequestBodyCollectionInfo;

  @SpeakeasyMetadata({ data: "json, name=item", elemType: UpdateCollectionRequestBodyCollectionItem })
  item?: UpdateCollectionRequestBodyCollectionItem[];
}


export class UpdateCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: UpdateCollectionRequestBodyCollection;
}


export class UpdateCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateCollection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: UpdateCollection200ApplicationJsonCollection;
}


export class UpdateCollection400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollection400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: UpdateCollection400ApplicationJsonError;
}


export class UpdateCollection403ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollection403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: UpdateCollection403ApplicationJsonError;
}


export class UpdateCollection404ApplicationJsonErrorDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: string;
}


export class UpdateCollection404ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: UpdateCollection404ApplicationJsonErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollection404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: UpdateCollection404ApplicationJsonError;
}


export class UpdateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateCollectionRequestBody;
}


export class UpdateCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateCollection200ApplicationJsonObject?: UpdateCollection200ApplicationJson;

  @SpeakeasyMetadata()
  updateCollection400ApplicationJsonObject?: UpdateCollection400ApplicationJson;

  @SpeakeasyMetadata()
  updateCollection403ApplicationJsonObject?: UpdateCollection403ApplicationJson;

  @SpeakeasyMetadata()
  updateCollection404ApplicationJsonObject?: UpdateCollection404ApplicationJson;
}
