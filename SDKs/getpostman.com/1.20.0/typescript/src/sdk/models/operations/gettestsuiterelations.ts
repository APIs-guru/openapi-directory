import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTestSuiteRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetTestSuiteRelations200ApplicationJsonTestsuite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetTestSuiteRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testsuite", elemType: GetTestSuiteRelations200ApplicationJsonTestsuite })
  testsuite?: GetTestSuiteRelations200ApplicationJsonTestsuite[];
}


export class GetTestSuiteRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTestSuiteRelationsPathParams;
}


export class GetTestSuiteRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTestSuiteRelations200ApplicationJsonObject?: GetTestSuiteRelations200ApplicationJson;
}
