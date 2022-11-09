import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class DeleteMockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMockPathParams;
}


export class DeleteMock200ApplicationJsonMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteMock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: DeleteMock200ApplicationJsonMock;
}


export class DeleteMockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteMock200ApplicationJsonObject?: DeleteMock200ApplicationJson;
}
