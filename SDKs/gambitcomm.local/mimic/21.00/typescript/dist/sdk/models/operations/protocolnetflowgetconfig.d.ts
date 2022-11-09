import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolNetflowGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowGetConfigPathParams;
}
export declare class ProtocolNetflowGetConfigResponse extends SpeakeasyBase {
    configNetflow?: shared.ConfigNetflow;
    contentType: string;
    statusCode: number;
}
