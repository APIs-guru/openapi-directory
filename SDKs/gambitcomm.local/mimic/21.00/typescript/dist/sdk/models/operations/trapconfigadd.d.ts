import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TrapConfigAddPathParams extends SpeakeasyBase {
    ip: string;
    agentNum: number;
    port: number;
}
export declare class TrapConfigAddRequest extends SpeakeasyBase {
    pathParams: TrapConfigAddPathParams;
}
export declare class TrapConfigAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trapConfigAdd200ApplicationJsonString?: string;
}
