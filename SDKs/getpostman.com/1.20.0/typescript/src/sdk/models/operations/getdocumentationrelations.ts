import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDocumentationRelationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiVersionId" })
  apiVersionId: string;
}


export class GetDocumentationRelationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentationRelationsPathParams;
}


export class GetDocumentationRelations200ApplicationJsonDocumentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionId" })
  collectionId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: string;
}


export class GetDocumentationRelations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation", elemType: operations.GetDocumentationRelations200ApplicationJsonDocumentation })
  documentation?: GetDocumentationRelations200ApplicationJsonDocumentation[];
}


export class GetDocumentationRelationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDocumentationRelations200ApplicationJsonObject?: GetDocumentationRelations200ApplicationJson;
}
