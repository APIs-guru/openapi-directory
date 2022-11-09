import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSnmptcpGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmptcpGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpGetConfigPathParams;
}
export declare class ProtocolSnmptcpGetConfigResponse extends SpeakeasyBase {
    configSnmptcp?: shared.ConfigSnmptcp;
    contentType: string;
    statusCode: number;
}
