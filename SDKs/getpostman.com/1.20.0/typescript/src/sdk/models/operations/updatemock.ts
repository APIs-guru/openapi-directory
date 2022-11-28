import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class UpdateMockRequestBodyMock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=private" })
  private?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versionTag" })
  versionTag?: string;
}


export class UpdateMockRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: UpdateMockRequestBodyMock;
}


export class UpdateMock200ApplicationJsonMockConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: any[];

  @SpeakeasyMetadata({ data: "json, name=matchBody" })
  matchBody?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchQueryParams" })
  matchQueryParams?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchWildcards" })
  matchWildcards?: boolean;
}


export class UpdateMock200ApplicationJsonMock extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: UpdateMock200ApplicationJsonMockConfig;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mockUrl" })
  mockUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateMock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: UpdateMock200ApplicationJsonMock;
}


export class UpdateMockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMockPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateMockRequestBody;
}


export class UpdateMockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateMock200ApplicationJsonObject?: UpdateMock200ApplicationJson;
}
