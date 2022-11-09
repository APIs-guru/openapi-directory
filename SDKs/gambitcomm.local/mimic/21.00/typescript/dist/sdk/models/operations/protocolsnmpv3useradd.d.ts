import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3UserAddPathParams extends SpeakeasyBase {
    agentNum: number;
    authKey: string;
    authProtocol: string;
    privKey: string;
    privProtocol: string;
    securityName: string;
    userName: string;
}
export declare class ProtocolSnmpv3UserAddRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3UserAddPathParams;
}
export declare class ProtocolSnmpv3UserAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3UserAdd200ApplicationJsonString?: string;
}
