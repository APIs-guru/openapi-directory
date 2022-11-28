import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrapConfigDelPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class TrapConfigDelRequest extends SpeakeasyBase {
    pathParams: TrapConfigDelPathParams;
}
export declare class TrapConfigDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trapConfigDel200ApplicationJsonString?: string;
}
