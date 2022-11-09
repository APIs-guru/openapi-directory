import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSnmptcpIpaliasListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmptcpIpaliasListRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpIpaliasListPathParams;
}
export declare class ProtocolSnmptcpIpaliasListResponse extends SpeakeasyBase {
    contentType: string;
    ipAliases?: shared.IpAlias[];
    statusCode: number;
}
