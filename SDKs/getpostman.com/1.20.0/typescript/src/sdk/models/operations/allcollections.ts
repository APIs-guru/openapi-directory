import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllCollections200ApplicationJsonCollections extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllCollections200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=collections", elemType: operations.AllCollections200ApplicationJsonCollections })
  collections?: AllCollections200ApplicationJsonCollections[];
}


export class AllCollectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  allCollections200ApplicationJsonObject?: AllCollections200ApplicationJson;
}
