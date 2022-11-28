import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEnvironmentRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetEnvironmentRelations200ApplicationJsonEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetEnvironmentRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment", elemType: GetEnvironmentRelations200ApplicationJsonEnvironment })
  environment?: GetEnvironmentRelations200ApplicationJsonEnvironment[];
}


export class GetEnvironmentRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEnvironmentRelationsPathParams;
}


export class GetEnvironmentRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEnvironmentRelations200ApplicationJsonObject?: GetEnvironmentRelations200ApplicationJson;
}
