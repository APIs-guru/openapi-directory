import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCollectionFromSchemaPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
    schemaId: string;
}
export declare class CreateCollectionFromSchemaQueryParams extends SpeakeasyBase {
    workspace?: string;
}
export declare class CreateCollectionFromSchemaRequestBodyRelations extends SpeakeasyBase {
    type?: string;
}
export declare class CreateCollectionFromSchemaRequestBody extends SpeakeasyBase {
    name?: string;
    relations?: CreateCollectionFromSchemaRequestBodyRelations[];
}
export declare class CreateCollectionFromSchema200ApplicationJsonCollection extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
export declare class CreateCollectionFromSchema200ApplicationJsonRelations extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class CreateCollectionFromSchema200ApplicationJson extends SpeakeasyBase {
    collection?: CreateCollectionFromSchema200ApplicationJsonCollection;
    relations?: CreateCollectionFromSchema200ApplicationJsonRelations[];
}
export declare class CreateCollectionFromSchemaRequest extends SpeakeasyBase {
    pathParams: CreateCollectionFromSchemaPathParams;
    queryParams: CreateCollectionFromSchemaQueryParams;
    request?: CreateCollectionFromSchemaRequestBody;
}
export declare class CreateCollectionFromSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createCollectionFromSchema200ApplicationJsonObject?: CreateCollectionFromSchema200ApplicationJson;
}
