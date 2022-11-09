import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3GroupDelPathParams extends SpeakeasyBase {
    agentNum: number;
    groupName: string;
}
export declare class ProtocolSnmpv3GroupDelRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GroupDelPathParams;
}
export declare class ProtocolSnmpv3GroupDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3GroupDel200ApplicationJsonString?: string;
}
