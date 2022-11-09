import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolIpmiGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolIpmiGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiGetConfigPathParams;
}
export declare class ProtocolIpmiGetConfigResponse extends SpeakeasyBase {
    configIpmi?: shared.ConfigIpmi;
    contentType: string;
    statusCode: number;
}
