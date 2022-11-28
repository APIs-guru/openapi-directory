import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolSnmpv3GetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmpv3GetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmpv3GetConfigPathParams;
}
export declare class ProtocolSnmpv3GetConfigResponse extends SpeakeasyBase {
    configSnmPv3?: shared.ConfigSnmPv3;
    contentType: string;
    statusCode: number;
}
