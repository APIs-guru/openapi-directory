import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListIpaliasesPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ListIpaliasesRequest extends SpeakeasyBase {
    pathParams: ListIpaliasesPathParams;
}
export declare class ListIpaliasesResponse extends SpeakeasyBase {
    contentType: string;
    ipAliases?: shared.IpAlias[];
    statusCode: number;
}
