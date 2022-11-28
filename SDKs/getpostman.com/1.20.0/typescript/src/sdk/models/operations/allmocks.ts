import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AllMocks200ApplicationJsonMocks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mockUrl" })
  mockUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class AllMocks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mocks", elemType: AllMocks200ApplicationJsonMocks })
  mocks?: AllMocks200ApplicationJsonMocks[];
}


export class AllMocksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  allMocks200ApplicationJsonObject?: AllMocks200ApplicationJson;
}
