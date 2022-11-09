import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmpv3AccessAddPathParams extends SpeakeasyBase {
    agentNum: number;
    contextMatch: string;
    groupName: string;
    notifyView: string;
    prefix: string;
    readView: string;
    securityLevel: string;
    securityModel: string;
    writeView: string;
}
export declare class ProtocolSnmpv3AccessAddRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3AccessAddPathParams;
}
export declare class ProtocolSnmpv3AccessAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmpv3AccessAdd200ApplicationJsonString?: string;
}
