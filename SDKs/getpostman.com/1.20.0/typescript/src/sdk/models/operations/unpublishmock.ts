import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnpublishMockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class UnpublishMock200ApplicationJsonMock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class UnpublishMock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: UnpublishMock200ApplicationJsonMock;
}


export class UnpublishMockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnpublishMockPathParams;
}


export class UnpublishMockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unpublishMock200ApplicationJsonObject?: UnpublishMock200ApplicationJson;
}
