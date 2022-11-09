import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnvironmentRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetEnvironmentRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnvironmentRelationsPathParams;
}


export class GetEnvironmentRelations200ApplicationJsonEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetEnvironmentRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment", elemType: operations.GetEnvironmentRelations200ApplicationJsonEnvironment })
  environment?: GetEnvironmentRelations200ApplicationJsonEnvironment[];
}


export class GetEnvironmentRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEnvironmentRelations200ApplicationJsonObject?: GetEnvironmentRelations200ApplicationJson;
}
