import { SpeakeasyBase } from "../../../internal/utils";
export declare class StorePersistsPathParams extends SpeakeasyBase {
    var: string;
}
export declare class StorePersistsRequest extends SpeakeasyBase {
    pathParams: StorePersistsPathParams;
}
export declare class StorePersistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storePersists200ApplicationJsonString?: string;
}
