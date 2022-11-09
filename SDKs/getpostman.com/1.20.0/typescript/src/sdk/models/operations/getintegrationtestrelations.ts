import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetIntegrationTestRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetIntegrationTestRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIntegrationTestRelationsPathParams;
}


export class GetIntegrationTestRelations200ApplicationJsonIntegrationtest extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetIntegrationTestRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=integrationtest", elemType: operations.GetIntegrationTestRelations200ApplicationJsonIntegrationtest })
  integrationtest?: GetIntegrationTestRelations200ApplicationJsonIntegrationtest[];
}


export class GetIntegrationTestRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getIntegrationTestRelations200ApplicationJsonObject?: GetIntegrationTestRelations200ApplicationJson;
}
