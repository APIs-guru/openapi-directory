import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolNetflowChangeDfsPathParams extends SpeakeasyBase {
    agentNum: number;
    interval: number;
}
export declare class ProtocolNetflowChangeDfsRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowChangeDfsPathParams;
}
export declare class ProtocolNetflowChangeDfsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowChangeDfs200ApplicationJsonString?: string;
}
