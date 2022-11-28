import { SpeakeasyBase } from "../../../internal/utils";
export declare class FromDelPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class FromDelRequest extends SpeakeasyBase {
    pathParams: FromDelPathParams;
}
export declare class FromDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fromDel200ApplicationJsonString?: string;
}
