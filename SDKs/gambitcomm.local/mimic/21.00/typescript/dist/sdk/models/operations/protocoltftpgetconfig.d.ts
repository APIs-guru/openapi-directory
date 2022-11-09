import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolTftpGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTftpGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpGetConfigPathParams;
}
export declare class ProtocolTftpGetConfigResponse extends SpeakeasyBase {
    configTftp?: shared.ConfigTftp;
    contentType: string;
    statusCode: number;
}
