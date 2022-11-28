import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}


export class CreateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;
}


export class CreateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class CreateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: CreateCollectionRequestBodyCollectionItemItemRequestBody;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=header", elemType: CreateCollectionRequestBodyCollectionItemItemRequestHeader })
  header?: CreateCollectionRequestBodyCollectionItemItemRequestHeader[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class CreateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: CreateCollectionRequestBodyCollectionItemItemRequest;
}


export class CreateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=item", elemType: CreateCollectionRequestBodyCollectionItemItem })
  item?: CreateCollectionRequestBodyCollectionItemItem[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateCollectionRequestBodyCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: CreateCollectionRequestBodyCollectionInfo;

  @SpeakeasyMetadata({ data: "json, name=item", elemType: CreateCollectionRequestBodyCollectionItem })
  item?: CreateCollectionRequestBodyCollectionItem[];
}


export class CreateCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: CreateCollectionRequestBodyCollection;
}


export class CreateCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateCollection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: CreateCollection200ApplicationJsonCollection;
}


export class CreateCollection400ApplicationJsonError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateCollection400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: CreateCollection400ApplicationJsonError;
}


export class CreateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateCollectionRequestBody;
}


export class CreateCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createCollection200ApplicationJsonObject?: CreateCollection200ApplicationJson;

  @SpeakeasyMetadata()
  createCollection400ApplicationJsonObject?: CreateCollection400ApplicationJson;
}
