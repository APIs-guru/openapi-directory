import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolTelnetGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetGetConfigPathParams;
}
export declare class ProtocolTelnetGetConfigResponse extends SpeakeasyBase {
    configTelnet?: shared.ConfigTelnet;
    contentType: string;
    statusCode: number;
}
