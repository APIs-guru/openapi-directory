import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleMockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class SingleMock200ApplicationJsonMock extends SpeakeasyBase {
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


export class SingleMock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: SingleMock200ApplicationJsonMock;
}


export class SingleMockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SingleMockPathParams;
}


export class SingleMockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  singleMock200ApplicationJsonObject?: SingleMock200ApplicationJson;
}
