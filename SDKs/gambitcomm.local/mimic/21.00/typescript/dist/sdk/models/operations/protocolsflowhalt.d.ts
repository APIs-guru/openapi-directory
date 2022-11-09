import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSflowHaltPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowHaltRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowHaltPathParams;
}
export declare class ProtocolSflowHaltResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowHalt200ApplicationJsonString?: string;
}
