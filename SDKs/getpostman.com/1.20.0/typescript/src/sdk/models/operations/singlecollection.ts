import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class SingleCollection200ApplicationJsonCollectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_postman_id" })
  postmanId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemEventScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exec" })
  exec?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listen" })
  listen?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: SingleCollection200ApplicationJsonCollectionItemEventScript;
}


export class SingleCollection200ApplicationJsonCollectionItemRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formdata" })
  formdata?: any[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemRequestHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: SingleCollection200ApplicationJsonCollectionItemRequestBody;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=header", elemType: SingleCollection200ApplicationJsonCollectionItemRequestHeader })
  header?: SingleCollection200ApplicationJsonCollectionItemRequestHeader[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class SingleCollection200ApplicationJsonCollectionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event", elemType: SingleCollection200ApplicationJsonCollectionItemEvent })
  event?: SingleCollection200ApplicationJsonCollectionItemEvent[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: SingleCollection200ApplicationJsonCollectionItemRequest;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: any[];
}


export class SingleCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: SingleCollection200ApplicationJsonCollectionInfo;

  @SpeakeasyMetadata({ data: "json, name=item", elemType: SingleCollection200ApplicationJsonCollectionItem })
  item?: SingleCollection200ApplicationJsonCollectionItem[];

  @SpeakeasyMetadata({ data: "json, name=variables" })
  variables?: any[];
}


export class SingleCollection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: SingleCollection200ApplicationJsonCollection;
}


export class SingleCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SingleCollectionPathParams;
}


export class SingleCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  singleCollection200ApplicationJsonObject?: SingleCollection200ApplicationJson;
}
