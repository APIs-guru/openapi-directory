import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSchemaPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class CreateSchemaRequestBodySchema extends SpeakeasyBase {
    language?: string;
    schema?: string;
    type?: string;
}
export declare class CreateSchemaRequestBody extends SpeakeasyBase {
    schema?: CreateSchemaRequestBodySchema;
}
export declare class CreateSchema200ApplicationJsonSchema extends SpeakeasyBase {
    apiVersion?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    language?: string;
    type?: string;
    updateBy?: string;
    updatedAt?: string;
}
export declare class CreateSchema200ApplicationJson extends SpeakeasyBase {
    schema?: CreateSchema200ApplicationJsonSchema;
}
export declare class CreateSchemaRequest extends SpeakeasyBase {
    pathParams: CreateSchemaPathParams;
    request?: CreateSchemaRequestBody;
}
export declare class CreateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createSchema200ApplicationJsonObject?: CreateSchema200ApplicationJson;
}
