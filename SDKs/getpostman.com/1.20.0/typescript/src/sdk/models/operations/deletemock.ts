import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class DeleteMock200ApplicationJsonMock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class DeleteMock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: DeleteMock200ApplicationJsonMock;
}


export class DeleteMockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMockPathParams;
}


export class DeleteMockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteMock200ApplicationJsonObject?: DeleteMock200ApplicationJson;
}
