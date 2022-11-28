import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllCollections200ApplicationJsonCollections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllCollections200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collections", elemType: AllCollections200ApplicationJsonCollections })
  collections?: AllCollections200ApplicationJsonCollections[];
}


export class AllCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  allCollections200ApplicationJsonObject?: AllCollections200ApplicationJson;
}
