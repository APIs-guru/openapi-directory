import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class CreateRelationsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=contracttest" })
  contracttest?: string[];

  @Metadata({ data: "json, name=documentation" })
  documentation?: string[];

  @Metadata({ data: "json, name=mock" })
  mock?: string[];

  @Metadata({ data: "json, name=testsuite" })
  testsuite?: string[];
}


export class CreateRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateRelationsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateRelationsRequestBody;
}


export class CreateRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=contracttest" })
  contracttest?: string[];

  @Metadata({ data: "json, name=documentation" })
  documentation?: string[];

  @Metadata({ data: "json, name=testsuite" })
  testsuite?: string[];
}


export class CreateRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createRelations200ApplicationJsonObject?: CreateRelations200ApplicationJson;
}
