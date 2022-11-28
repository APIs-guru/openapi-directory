import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDocumentationRelationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetDocumentationRelations200ApplicationJsonDocumentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetDocumentationRelations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation", elemType: GetDocumentationRelations200ApplicationJsonDocumentation })
  documentation?: GetDocumentationRelations200ApplicationJsonDocumentation[];
}


export class GetDocumentationRelationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentationRelationsPathParams;
}


export class GetDocumentationRelationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDocumentationRelations200ApplicationJsonObject?: GetDocumentationRelations200ApplicationJson;
}
