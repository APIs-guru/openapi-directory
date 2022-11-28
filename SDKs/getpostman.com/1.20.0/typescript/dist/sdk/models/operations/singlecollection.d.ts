import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleCollectionPathParams extends SpeakeasyBase {
    collectionUid: string;
}
export declare class SingleCollection200ApplicationJsonCollectionInfo extends SpeakeasyBase {
    postmanId?: string;
    description?: string;
    name?: string;
    schema?: string;
}
export declare class SingleCollection200ApplicationJsonCollectionItemEventScript extends SpeakeasyBase {
    exec?: string;
    type?: string;
}
export declare class SingleCollection200ApplicationJsonCollectionItemEvent extends SpeakeasyBase {
    listen?: string;
    script?: SingleCollection200ApplicationJsonCollectionItemEventScript;
}
export declare class SingleCollection200ApplicationJsonCollectionItemRequestBody extends SpeakeasyBase {
    formdata?: any[];
    mode?: string;
}
export declare class SingleCollection200ApplicationJsonCollectionItemRequestHeader extends SpeakeasyBase {
    description?: string;
    key?: string;
    value?: string;
}
export declare class SingleCollection200ApplicationJsonCollectionItemRequest extends SpeakeasyBase {
    body?: SingleCollection200ApplicationJsonCollectionItemRequestBody;
    description?: string;
    header?: SingleCollection200ApplicationJsonCollectionItemRequestHeader[];
    method?: string;
    url?: string;
}
export declare class SingleCollection200ApplicationJsonCollectionItem extends SpeakeasyBase {
    event?: SingleCollection200ApplicationJsonCollectionItemEvent[];
    id?: string;
    name?: string;
    request?: SingleCollection200ApplicationJsonCollectionItemRequest;
    response?: any[];
}
export declare class SingleCollection200ApplicationJsonCollection extends SpeakeasyBase {
    info?: SingleCollection200ApplicationJsonCollectionInfo;
    item?: SingleCollection200ApplicationJsonCollectionItem[];
    variables?: any[];
}
export declare class SingleCollection200ApplicationJson extends SpeakeasyBase {
    collection?: SingleCollection200ApplicationJsonCollection;
}
export declare class SingleCollectionRequest extends SpeakeasyBase {
    pathParams: SingleCollectionPathParams;
}
export declare class SingleCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    singleCollection200ApplicationJsonObject?: SingleCollection200ApplicationJson;
}
