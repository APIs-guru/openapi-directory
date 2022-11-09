import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSshIpaliasListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSshIpaliasListRequest extends SpeakeasyBase {
    pathParams: ProtocolSshIpaliasListPathParams;
}
export declare class ProtocolSshIpaliasListResponse extends SpeakeasyBase {
    contentType: string;
    ipAliases?: shared.IpAlias[];
    statusCode: number;
}
