import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMockRequestBodyMock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;
}


export class CreateMockRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: CreateMockRequestBodyMock;
}


export class CreateMock200ApplicationJsonMock extends SpeakeasyBase {
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


export class CreateMock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: CreateMock200ApplicationJsonMock;
}


export class CreateMockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateMockRequestBody;
}


export class CreateMockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createMock200ApplicationJsonObject?: CreateMock200ApplicationJson;
}
