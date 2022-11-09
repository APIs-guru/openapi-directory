import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}


export class CreateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=raw" })
  raw?: string;
}


export class CreateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class CreateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: CreateCollectionRequestBodyCollectionItemItemRequestBody;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=header", elemType: operations.CreateCollectionRequestBodyCollectionItemItemRequestHeader })
  header?: CreateCollectionRequestBodyCollectionItemItemRequestHeader[];

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class CreateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=request" })
  request?: CreateCollectionRequestBodyCollectionItemItemRequest;
}


export class CreateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=item", elemType: operations.CreateCollectionRequestBodyCollectionItemItem })
  item?: CreateCollectionRequestBodyCollectionItemItem[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateCollectionRequestBodyCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: CreateCollectionRequestBodyCollectionInfo;

  @Metadata({ data: "json, name=item", elemType: operations.CreateCollectionRequestBodyCollectionItem })
  item?: CreateCollectionRequestBodyCollectionItem[];
}


export class CreateCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: CreateCollectionRequestBodyCollection;
}


export class CreateCollectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateCollectionRequestBody;
}


export class CreateCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class CreateCollection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: CreateCollection200ApplicationJsonCollection;
}


export class CreateCollection400ApplicationJsonError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateCollection400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: CreateCollection400ApplicationJsonError;
}


export class CreateCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createCollection200ApplicationJsonObject?: CreateCollection200ApplicationJson;

  @Metadata()
  createCollection400ApplicationJsonObject?: CreateCollection400ApplicationJson;
}
