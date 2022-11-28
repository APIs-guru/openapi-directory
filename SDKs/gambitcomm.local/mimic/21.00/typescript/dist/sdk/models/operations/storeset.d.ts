import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoreSetPathParams extends SpeakeasyBase {
    persist: number;
    var: string;
}
export declare class StoreSetRequest extends SpeakeasyBase {
    pathParams: StoreSetPathParams;
    request?: string;
}
export declare class StoreSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeSet200ApplicationJsonString?: string;
}
