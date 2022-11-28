import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolIpmiSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolIpmiSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiSetConfigPathParams;
}
export declare class ProtocolIpmiSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolIpmiSetConfig200ApplicationJsonString?: string;
}
