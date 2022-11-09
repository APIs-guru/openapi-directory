import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolCoapGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolCoapGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolCoapGetConfigPathParams;
}
export declare class ProtocolCoapGetConfigResponse extends SpeakeasyBase {
    configCoap?: shared.ConfigCoap;
    contentType: string;
    statusCode: number;
}
