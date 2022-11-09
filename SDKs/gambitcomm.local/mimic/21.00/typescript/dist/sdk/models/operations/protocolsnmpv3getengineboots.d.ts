import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GetEnginebootsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GetEnginebootsRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GetEnginebootsPathParams;
}
export declare class ProtocolSnmpv3GetEnginebootsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GetEngineboots200ApplicationJsonInt32Integer?: number;
}
