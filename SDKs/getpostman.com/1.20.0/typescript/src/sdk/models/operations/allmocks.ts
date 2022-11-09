import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AllMocks200ApplicationJsonMocks extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mockUrl" })
  mockUrl?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllMocks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mocks", elemType: operations.AllMocks200ApplicationJsonMocks })
  mocks?: AllMocks200ApplicationJsonMocks[];
}


export class AllMocksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  allMocks200ApplicationJsonObject?: AllMocks200ApplicationJson;
}
