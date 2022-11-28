import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAnApiVersionPathParams extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class DeleteAnApiVersion200ApplicationJsonVersion extends SpeakeasyBase {
    id?: string;
}
export declare class DeleteAnApiVersion200ApplicationJson extends SpeakeasyBase {
    version?: DeleteAnApiVersion200ApplicationJsonVersion;
}
export declare class DeleteAnApiVersionRequest extends SpeakeasyBase {
    pathParams: DeleteAnApiVersionPathParams;
}
export declare class DeleteAnApiVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteAnApiVersion200ApplicationJsonObject?: DeleteAnApiVersion200ApplicationJson;
}
