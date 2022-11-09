import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mock_uid" })
  mockUid: string;
}


export class UpdateMockRequestBodyMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=private" })
  private?: boolean;

  @Metadata({ data: "json, name=versionTag" })
  versionTag?: string;
}


export class UpdateMockRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: UpdateMockRequestBodyMock;
}


export class UpdateMockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMockPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateMockRequestBody;
}


export class UpdateMock200ApplicationJsonMockConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=headers" })
  headers?: any[];

  @Metadata({ data: "json, name=matchBody" })
  matchBody?: boolean;

  @Metadata({ data: "json, name=matchQueryParams" })
  matchQueryParams?: boolean;

  @Metadata({ data: "json, name=matchWildcards" })
  matchWildcards?: boolean;
}


export class UpdateMock200ApplicationJsonMock extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=config" })
  config?: UpdateMock200ApplicationJsonMockConfig;

  @Metadata({ data: "json, name=environment" })
  environment?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=mockUrl" })
  mockUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}


export class UpdateMock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mock" })
  mock?: UpdateMock200ApplicationJsonMock;
}


export class UpdateMockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateMock200ApplicationJsonObject?: UpdateMock200ApplicationJson;
}
