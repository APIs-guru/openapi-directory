import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class FromAddPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class FromAddRequest extends SpeakeasyBase {
    pathParams: FromAddPathParams;
}
export declare class FromAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fromAdd200ApplicationJsonString?: string;
}
