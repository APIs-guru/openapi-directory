import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMockRequestBodyMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;
}


export class CreateMockRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: CreateMockRequestBodyMock;
}


export class CreateMockRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateMockRequestBody;
}


export class CreateMock200ApplicationJsonMock extends SpeakeasyBase {
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


export class CreateMock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: CreateMock200ApplicationJsonMock;
}


export class CreateMockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createMock200ApplicationJsonObject?: CreateMock200ApplicationJson;
}
