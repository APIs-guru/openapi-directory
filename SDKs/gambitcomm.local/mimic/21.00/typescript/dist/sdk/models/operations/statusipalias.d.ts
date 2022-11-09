import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StatusIpaliasPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class StatusIpaliasRequest extends SpeakeasyBase {
    pathParams: StatusIpaliasPathParams;
}
export declare class StatusIpaliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    statusIpalias200ApplicationJsonString?: string;
}
