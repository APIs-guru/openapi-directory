import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GetContextEngineidPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GetContextEngineidRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GetContextEngineidPathParams;
}
export declare class ProtocolSnmpv3GetContextEngineidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GetContextEngineid200ApplicationJsonString?: string;
}
