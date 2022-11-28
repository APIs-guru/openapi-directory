import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoreGetPathParams extends SpeakeasyBase {
    var: string;
}
export declare class StoreGetRequest extends SpeakeasyBase {
    pathParams: StoreGetPathParams;
}
export declare class StoreGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeGet200ApplicationJsonString?: string;
}
