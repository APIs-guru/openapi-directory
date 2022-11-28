import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
    description?: string;
    name?: string;
    schema?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
    mode?: string;
    raw?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
    body?: CreateCollectionRequestBodyCollectionItemItemRequestBody;
    description?: string;
    header?: CreateCollectionRequestBodyCollectionItemItemRequestHeader[];
    method?: string;
    url?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
    name?: string;
    request?: CreateCollectionRequestBodyCollectionItemItemRequest;
}
export declare class CreateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
    item?: CreateCollectionRequestBodyCollectionItemItem[];
    name?: string;
}
export declare class CreateCollectionRequestBodyCollection extends SpeakeasyBase {
    info?: CreateCollectionRequestBodyCollectionInfo;
    item?: CreateCollectionRequestBodyCollectionItem[];
}
export declare class CreateCollectionRequestBody extends SpeakeasyBase {
    collection?: CreateCollectionRequestBodyCollection;
}
export declare class CreateCollection200ApplicationJsonCollection extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateCollection200ApplicationJson extends SpeakeasyBase {
    collection?: CreateCollection200ApplicationJsonCollection;
}
export declare class CreateCollection400ApplicationJsonError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
export declare class CreateCollection400ApplicationJson extends SpeakeasyBase {
    error?: CreateCollection400ApplicationJsonError;
}
export declare class CreateCollectionRequest extends SpeakeasyBase {
    request?: CreateCollectionRequestBody;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createCollection200ApplicationJsonObject?: CreateCollection200ApplicationJson;
    createCollection400ApplicationJsonObject?: CreateCollection400ApplicationJson;
}
