import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFailedIpNsHeaders extends SpeakeasyBase {
    authorization: string;
    contentType: string;
}
export declare class ListFailedIpNsRequest extends SpeakeasyBase {
    headers: ListFailedIpNsHeaders;
}
export declare class ListFailedIpNsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listFailedIpNs?: shared.ListFailedIpNs;
}
