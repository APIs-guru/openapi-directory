import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GetEngineidPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GetEngineidRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GetEngineidPathParams;
}
export declare class ProtocolSnmpv3GetEngineidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GetEngineid200ApplicationJsonString?: string;
}
