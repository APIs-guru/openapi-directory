import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PublishMockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class PublishMockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PublishMockPathParams;
}


export class PublishMock200ApplicationJsonMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class PublishMock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: PublishMock200ApplicationJsonMock;
}


export class PublishMockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  publishMock200ApplicationJsonObject?: PublishMock200ApplicationJson;
}
