import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StoreLreplacePathParams extends SpeakeasyBase {
    index: number;
    var: string;
}
export declare class StoreLreplaceRequest extends SpeakeasyBase {
    pathParams: StoreLreplacePathParams;
    request?: string;
}
export declare class StoreLreplaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    storeLreplace200ApplicationJsonString?: string;
}
