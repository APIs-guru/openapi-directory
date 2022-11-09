import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DelIpaliasPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class DelIpaliasRequest extends SpeakeasyBase {
    pathParams: DelIpaliasPathParams;
}
export declare class DelIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    delIpalias200ApplicationJsonString?: string;
}
