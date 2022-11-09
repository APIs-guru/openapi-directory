import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnpublishMockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class UnpublishMockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnpublishMockPathParams;
}


export class UnpublishMock200ApplicationJsonMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class UnpublishMock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: UnpublishMock200ApplicationJsonMock;
}


export class UnpublishMockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  unpublishMock200ApplicationJsonObject?: UnpublishMock200ApplicationJson;
}
