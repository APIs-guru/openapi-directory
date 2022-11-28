import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateSchemaPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
    schemaId: string;
}
export declare class UpdateSchemaRequestBodySchema extends SpeakeasyBase {
    language?: string;
    schema?: string;
    type?: string;
}
export declare class UpdateSchemaRequestBody extends SpeakeasyBase {
    schema?: UpdateSchemaRequestBodySchema;
}
export declare class UpdateSchema200ApplicationJsonSchema extends SpeakeasyBase {
    apiVersion?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    language?: string;
    type?: string;
    updateBy?: string;
    updatedAt?: string;
}
export declare class UpdateSchema200ApplicationJson extends SpeakeasyBase {
    schema?: UpdateSchema200ApplicationJsonSchema;
}
export declare class UpdateSchemaRequest extends SpeakeasyBase {
    pathParams: UpdateSchemaPathParams;
    request?: UpdateSchemaRequestBody;
}
export declare class UpdateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateSchema200ApplicationJsonObject?: UpdateSchema200ApplicationJson;
}
