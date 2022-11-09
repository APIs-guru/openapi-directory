import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleMockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class SingleMockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SingleMockPathParams;
}


export class SingleMock200ApplicationJsonMock extends SpeakeasyBase {
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


export class SingleMock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: SingleMock200ApplicationJsonMock;
}


export class SingleMockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  singleMock200ApplicationJsonObject?: SingleMock200ApplicationJson;
}
