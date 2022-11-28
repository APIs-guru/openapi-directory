import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class CreateRelationsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contracttest" })
  contracttest?: string[];

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string[];

  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: string[];

  @SpeakeasyMetadata({ data: "json, name=testsuite" })
  testsuite?: string[];
}


export class CreateRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contracttest" })
  contracttest?: string[];

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string[];

  @SpeakeasyMetadata({ data: "json, name=testsuite" })
  testsuite?: string[];
}


export class CreateRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateRelationsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateRelationsRequestBody;
}


export class CreateRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createRelations200ApplicationJsonObject?: CreateRelations200ApplicationJson;
}
