import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class UpdateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=_postman_id" })
  postmanId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=raw" })
  raw?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: UpdateCollectionRequestBodyCollectionItemItemRequestBody;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=header", elemType: operations.UpdateCollectionRequestBodyCollectionItemItemRequestHeader })
  header?: UpdateCollectionRequestBodyCollectionItemItemRequestHeader[];

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class UpdateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=request" })
  request?: UpdateCollectionRequestBodyCollectionItemItemRequest;
}


export class UpdateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=item", elemType: operations.UpdateCollectionRequestBodyCollectionItemItem })
  item?: UpdateCollectionRequestBodyCollectionItemItem[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollectionRequestBodyCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: UpdateCollectionRequestBodyCollectionInfo;

  @Metadata({ data: "json, name=item", elemType: operations.UpdateCollectionRequestBodyCollectionItem })
  item?: UpdateCollectionRequestBodyCollectionItem[];
}


export class UpdateCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: UpdateCollectionRequestBodyCollection;
}


export class UpdateCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCollectionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateCollectionRequestBody;
}


export class UpdateCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateCollection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: UpdateCollection200ApplicationJsonCollection;
}


export class UpdateCollection400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollection400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateCollection400ApplicationJsonError;
}


export class UpdateCollection403ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollection403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateCollection403ApplicationJsonError;
}


export class UpdateCollection404ApplicationJsonErrorDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=item" })
  item?: string;
}


export class UpdateCollection404ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: UpdateCollection404ApplicationJsonErrorDetails;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateCollection404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: UpdateCollection404ApplicationJsonError;
}


export class UpdateCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateCollection200ApplicationJsonObject?: UpdateCollection200ApplicationJson;

  @Metadata()
  updateCollection400ApplicationJsonObject?: UpdateCollection400ApplicationJson;

  @Metadata()
  updateCollection403ApplicationJsonObject?: UpdateCollection403ApplicationJson;

  @Metadata()
  updateCollection404ApplicationJsonObject?: UpdateCollection404ApplicationJson;
}
