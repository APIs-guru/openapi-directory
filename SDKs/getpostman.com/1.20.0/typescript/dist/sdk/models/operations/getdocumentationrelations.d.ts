import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDocumentationRelationsPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetDocumentationRelations200ApplicationJsonDocumentation extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetDocumentationRelations200ApplicationJson extends SpeakeasyBase {
    documentation?: GetDocumentationRelations200ApplicationJsonDocumentation[];
}
export declare class GetDocumentationRelationsRequest extends SpeakeasyBase {
    pathParams: GetDocumentationRelationsPathParams;
}
export declare class GetDocumentationRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDocumentationRelations200ApplicationJsonObject?: GetDocumentationRelations200ApplicationJson;
}
