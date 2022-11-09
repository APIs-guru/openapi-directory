import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccessDelPathParams extends SpeakeasyBase {
    user: string;
}
export declare class AccessDelRequest extends SpeakeasyBase {
    pathParams: AccessDelPathParams;
}
export declare class AccessDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessDel200ApplicationJsonString?: string;
}
