import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolWebGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolWebGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolWebGetConfigPathParams;
}
export declare class ProtocolWebGetConfigResponse extends SpeakeasyBase {
    configWeb?: shared.ConfigWeb;
    contentType: string;
    statusCode: number;
}
