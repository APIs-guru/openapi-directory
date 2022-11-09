import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StartIpaliasPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class StartIpaliasRequest extends SpeakeasyBase {
    pathParams: StartIpaliasPathParams;
}
export declare class StartIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    startIpalias200ApplicationJsonString?: string;
}
