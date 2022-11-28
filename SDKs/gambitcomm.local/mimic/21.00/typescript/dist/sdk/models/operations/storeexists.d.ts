import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoreExistsPathParams extends SpeakeasyBase {
    var: string;
}
export declare class StoreExistsRequest extends SpeakeasyBase {
    pathParams: StoreExistsPathParams;
}
export declare class StoreExistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeExists200ApplicationJsonString?: string;
}
