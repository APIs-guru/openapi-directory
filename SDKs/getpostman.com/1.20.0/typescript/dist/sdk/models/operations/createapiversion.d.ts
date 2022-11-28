import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateApiVersionPathParams extends SpeakeasyBase {
    apiId: string;
}
export declare class CreateApiVersionRequestBodyVersionSourceRelations extends SpeakeasyBase {
    documentation?: boolean;
    mock?: boolean;
    monitor?: boolean;
}
export declare class CreateApiVersionRequestBodyVersionSource extends SpeakeasyBase {
    id?: string;
    relations?: CreateApiVersionRequestBodyVersionSourceRelations;
    schema?: boolean;
}
export declare class CreateApiVersionRequestBodyVersion extends SpeakeasyBase {
    name?: string;
    source?: CreateApiVersionRequestBodyVersionSource;
}
export declare class CreateApiVersionRequestBody extends SpeakeasyBase {
    version?: CreateApiVersionRequestBodyVersion;
}
export declare class CreateApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
    api?: string;
    id?: string;
    name?: string;
}
export declare class CreateApiVersion200ApplicationJson extends SpeakeasyBase {
    version?: CreateApiVersion200ApplicationJsonVersion;
}
export declare class CreateApiVersionRequest extends SpeakeasyBase {
    pathParams: CreateApiVersionPathParams;
    request?: CreateApiVersionRequestBody;
}
export declare class CreateApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createApiVersion200ApplicationJsonObject?: CreateApiVersion200ApplicationJson;
}
