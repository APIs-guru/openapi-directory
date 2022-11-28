import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCollectionPathParams extends SpeakeasyBase {
    collectionUid: string;
}
export declare class DeleteCollection200ApplicationJsonCollection extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
export declare class DeleteCollection200ApplicationJson extends SpeakeasyBase {
    collection?: DeleteCollection200ApplicationJsonCollection;
}
export declare class DeleteCollection404ApplicationJsonErrorDetails extends SpeakeasyBase {
    id?: string;
    item?: string;
}
export declare class DeleteCollection404ApplicationJsonError extends SpeakeasyBase {
    details?: DeleteCollection404ApplicationJsonErrorDetails;
    message?: string;
    name?: string;
}
export declare class DeleteCollection404ApplicationJson extends SpeakeasyBase {
    error?: DeleteCollection404ApplicationJsonError;
}
export declare class DeleteCollectionRequest extends SpeakeasyBase {
    pathParams: DeleteCollectionPathParams;
}
export declare class DeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteCollection200ApplicationJsonObject?: DeleteCollection200ApplicationJson;
    deleteCollection404ApplicationJsonObject?: DeleteCollection404ApplicationJson;
}
