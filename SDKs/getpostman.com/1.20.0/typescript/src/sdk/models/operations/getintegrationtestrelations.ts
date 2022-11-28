import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIntegrationTestRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetIntegrationTestRelations200ApplicationJsonIntegrationtest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetIntegrationTestRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationtest", elemType: GetIntegrationTestRelations200ApplicationJsonIntegrationtest })
  integrationtest?: GetIntegrationTestRelations200ApplicationJsonIntegrationtest[];
}


export class GetIntegrationTestRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationTestRelationsPathParams;
}


export class GetIntegrationTestRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getIntegrationTestRelations200ApplicationJsonObject?: GetIntegrationTestRelations200ApplicationJson;
}
