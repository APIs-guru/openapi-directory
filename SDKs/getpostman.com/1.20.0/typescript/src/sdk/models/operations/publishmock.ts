import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PublishMockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class PublishMock200ApplicationJsonMock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class PublishMock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: PublishMock200ApplicationJsonMock;
}


export class PublishMockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishMockPathParams;
}


export class PublishMockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  publishMock200ApplicationJsonObject?: PublishMock200ApplicationJson;
}
