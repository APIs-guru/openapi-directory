import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllCollections200ApplicationJsonCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
export declare class AllCollections200ApplicationJson extends SpeakeasyBase {
    collections?: AllCollections200ApplicationJsonCollections[];
}
export declare class AllCollectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allCollections200ApplicationJsonObject?: AllCollections200ApplicationJson;
}
