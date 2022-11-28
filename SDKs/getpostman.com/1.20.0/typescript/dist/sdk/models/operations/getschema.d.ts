import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSchemaPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
    schemaId: string;
}
export declare class GetSchema200ApplicationJsonSchema extends SpeakeasyBase {
    apiVersion?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    language?: string;
    type?: string;
    updateBy?: string;
    updatedAt?: string;
}
export declare class GetSchema200ApplicationJson extends SpeakeasyBase {
    schema?: GetSchema200ApplicationJsonSchema;
}
export declare class GetSchemaRequest extends SpeakeasyBase {
    pathParams: GetSchemaPathParams;
}
export declare class GetSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSchema200ApplicationJsonObject?: GetSchema200ApplicationJson;
}
