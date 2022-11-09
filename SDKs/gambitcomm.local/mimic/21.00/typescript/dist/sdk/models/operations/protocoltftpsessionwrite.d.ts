import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTftpSessionWritePathParams extends SpeakeasyBase {
    agentNum: number;
    srcfile: string;
}
export declare class ProtocolTftpSessionWriteRequest extends SpeakeasyBase {
    pathParams: ProtocolTftpSessionWritePathParams;
}
export declare class ProtocolTftpSessionWriteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTftpSessionWrite200ApplicationJsonInt32Integers?: number[];
}
