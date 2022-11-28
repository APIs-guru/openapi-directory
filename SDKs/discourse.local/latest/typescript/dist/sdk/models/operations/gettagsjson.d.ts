import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTagsJson200ApplicationJsonExtras extends SpeakeasyBase {
    categories?: any[];
}
export declare class GetTagsJson200ApplicationJsonTags extends SpeakeasyBase {
    count?: number;
    id?: string;
    pmCount?: number;
    targetTag?: string;
    text?: string;
}
export declare class GetTagsJson200ApplicationJson extends SpeakeasyBase {
    extras?: GetTagsJson200ApplicationJsonExtras;
    tags?: GetTagsJson200ApplicationJsonTags[];
}
export declare class GetTagsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getTagsJson200ApplicationJsonObject?: GetTagsJson200ApplicationJson;
    statusCode: number;
}
