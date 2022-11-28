import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolTftpGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTftpGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpGetTracePathParams;
}
export declare class ProtocolTftpGetTraceResponse extends SpeakeasyBase {
    configTftp?: shared.ConfigTftp;
    contentType: string;
    statusCode: number;
}
