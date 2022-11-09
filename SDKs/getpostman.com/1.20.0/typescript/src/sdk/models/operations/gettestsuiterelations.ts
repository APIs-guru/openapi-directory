import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTestSuiteRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetTestSuiteRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTestSuiteRelationsPathParams;
}


export class GetTestSuiteRelations200ApplicationJsonTestsuite extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetTestSuiteRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=testsuite", elemType: operations.GetTestSuiteRelations200ApplicationJsonTestsuite })
  testsuite?: GetTestSuiteRelations200ApplicationJsonTestsuite[];
}


export class GetTestSuiteRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTestSuiteRelations200ApplicationJsonObject?: GetTestSuiteRelations200ApplicationJson;
}
