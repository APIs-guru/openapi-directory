import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCollectionPathParams extends SpeakeasyBase {
    collectionUid: string;
}
export declare class UpdateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
    postmanId?: string;
    description?: string;
    name?: string;
    schema?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
    mode?: string;
    raw?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
    body?: UpdateCollectionRequestBodyCollectionItemItemRequestBody;
    description?: string;
    header?: UpdateCollectionRequestBodyCollectionItemItemRequestHeader[];
    method?: string;
    url?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
    name?: string;
    request?: UpdateCollectionRequestBodyCollectionItemItemRequest;
}
export declare class UpdateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
    item?: UpdateCollectionRequestBodyCollectionItemItem[];
    name?: string;
}
export declare class UpdateCollectionRequestBodyCollection extends SpeakeasyBase {
    info?: UpdateCollectionRequestBodyCollectionInfo;
    item?: UpdateCollectionRequestBodyCollectionItem[];
}
export declare class UpdateCollectionRequestBody extends SpeakeasyBase {
    collection?: UpdateCollectionRequestBodyCollection;
}
export declare class UpdateCollection200ApplicationJsonCollection extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateCollection200ApplicationJson extends SpeakeasyBase {
    collection?: UpdateCollection200ApplicationJsonCollection;
}
export declare class UpdateCollection400ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class UpdateCollection400ApplicationJson extends SpeakeasyBase {
    error?: UpdateCollection400ApplicationJsonError;
}
export declare class UpdateCollection403ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class UpdateCollection403ApplicationJson extends SpeakeasyBase {
    error?: UpdateCollection403ApplicationJsonError;
}
export declare class UpdateCollection404ApplicationJsonErrorDetails extends SpeakeasyBase {
    id?: string;
    item?: string;
}
export declare class UpdateCollection404ApplicationJsonError extends SpeakeasyBase {
    details?: UpdateCollection404ApplicationJsonErrorDetails;
    message?: string;
    name?: string;
}
export declare class UpdateCollection404ApplicationJson extends SpeakeasyBase {
    error?: UpdateCollection404ApplicationJsonError;
}
export declare class UpdateCollectionRequest extends SpeakeasyBase {
    pathParams: UpdateCollectionPathParams;
    request?: UpdateCollectionRequestBody;
}
export declare class UpdateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateCollection200ApplicationJsonObject?: UpdateCollection200ApplicationJson;
    updateCollection400ApplicationJsonObject?: UpdateCollection400ApplicationJson;
    updateCollection403ApplicationJsonObject?: UpdateCollection403ApplicationJson;
    updateCollection404ApplicationJsonObject?: UpdateCollection404ApplicationJson;
}
