import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolIpmiSetAttrPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    value: string;
}
export declare class ProtocolIpmiSetAttrRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiSetAttrPathParams;
}
export declare class ProtocolIpmiSetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolIpmiSetAttr200ApplicationJsonString?: string;
}
