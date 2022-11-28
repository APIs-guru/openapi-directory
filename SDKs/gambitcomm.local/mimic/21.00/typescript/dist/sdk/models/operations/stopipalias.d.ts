import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopIpaliasPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class StopIpaliasRequest extends SpeakeasyBase {
    pathParams: StopIpaliasPathParams;
}
export declare class StopIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stopIpalias200ApplicationJsonString?: string;
}
