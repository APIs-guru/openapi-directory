import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolTelnetIpaliasListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolTelnetIpaliasListRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetIpaliasListPathParams;
}
export declare class ProtocolTelnetIpaliasListResponse extends SpeakeasyBase {
    contentType: string;
    ipAliases?: shared.IpAlias[];
    statusCode: number;
}
