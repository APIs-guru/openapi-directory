import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_uid" })
  collectionUid: string;
}


export class SingleCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SingleCollectionPathParams;
}


export class SingleCollection200ApplicationJsonCollectionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=_postman_id" })
  postmanId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemEventScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=exec" })
  exec?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=listen" })
  listen?: string;

  @Metadata({ data: "json, name=script" })
  script?: SingleCollection200ApplicationJsonCollectionItemEventScript;
}


export class SingleCollection200ApplicationJsonCollectionItemRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=formdata" })
  formdata?: any[];

  @Metadata({ data: "json, name=mode" })
  mode?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemRequestHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class SingleCollection200ApplicationJsonCollectionItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: SingleCollection200ApplicationJsonCollectionItemRequestBody;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=header", elemType: operations.SingleCollection200ApplicationJsonCollectionItemRequestHeader })
  header?: SingleCollection200ApplicationJsonCollectionItemRequestHeader[];

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class SingleCollection200ApplicationJsonCollectionItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=event", elemType: operations.SingleCollection200ApplicationJsonCollectionItemEvent })
  event?: SingleCollection200ApplicationJsonCollectionItemEvent[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=request" })
  request?: SingleCollection200ApplicationJsonCollectionItemRequest;

  @Metadata({ data: "json, name=response" })
  response?: any[];
}


export class SingleCollection200ApplicationJsonCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: SingleCollection200ApplicationJsonCollectionInfo;

  @Metadata({ data: "json, name=item", elemType: operations.SingleCollection200ApplicationJsonCollectionItem })
  item?: SingleCollection200ApplicationJsonCollectionItem[];

  @Metadata({ data: "json, name=variables" })
  variables?: any[];
}


export class SingleCollection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: SingleCollection200ApplicationJsonCollection;
}


export class SingleCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  singleCollection200ApplicationJsonObject?: SingleCollection200ApplicationJson;
}
