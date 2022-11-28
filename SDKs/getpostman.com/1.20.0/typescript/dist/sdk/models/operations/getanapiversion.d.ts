import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAnApiVersionPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
    api?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    name?: string;
    schema?: string[];
    updatedAt?: string;
    updatedBy?: string;
}
export declare class GetAnApiVersion200ApplicationJson extends SpeakeasyBase {
    version?: GetAnApiVersion200ApplicationJsonVersion;
}
export declare class GetAnApiVersionRequest extends SpeakeasyBase {
    pathParams: GetAnApiVersionPathParams;
}
export declare class GetAnApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAnApiVersion200ApplicationJsonObject?: GetAnApiVersion200ApplicationJson;
}
