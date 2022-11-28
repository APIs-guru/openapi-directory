import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAnApiVersionPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class UpdateAnApiVersionRequestBodyVersion extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateAnApiVersionRequestBody extends SpeakeasyBase {
    version?: UpdateAnApiVersionRequestBodyVersion;
}
export declare class UpdateAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
    api?: string;
    createdAt?: string;
    createdBy?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
    updatedBy?: string;
}
export declare class UpdateAnApiVersion200ApplicationJson extends SpeakeasyBase {
    version?: UpdateAnApiVersion200ApplicationJsonVersion;
}
export declare class UpdateAnApiVersionRequest extends SpeakeasyBase {
    pathParams: UpdateAnApiVersionPathParams;
    request?: UpdateAnApiVersionRequestBody;
}
export declare class UpdateAnApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateAnApiVersion200ApplicationJsonObject?: UpdateAnApiVersion200ApplicationJson;
}
