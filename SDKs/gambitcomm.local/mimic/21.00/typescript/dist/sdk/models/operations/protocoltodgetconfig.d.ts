import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolTodGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTodGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolTodGetConfigPathParams;
}
export declare class ProtocolTodGetConfigResponse extends SpeakeasyBase {
    configTod?: shared.ConfigTod;
    contentType: string;
    statusCode: number;
}
