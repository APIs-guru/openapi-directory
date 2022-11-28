import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowHaltPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowHaltRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowHaltPathParams;
}
export declare class ProtocolNetflowHaltResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowHalt200ApplicationJsonString?: string;
}
