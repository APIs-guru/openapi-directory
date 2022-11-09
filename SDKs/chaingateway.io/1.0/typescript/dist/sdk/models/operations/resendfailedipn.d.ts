import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ResendFailedIpnHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class ResendFailedIpnRequest extends SpeakeasyBase {
    headers: ResendFailedIpnHeaders;
    request: shared.ResendFailedIpnRequest;
}
export declare class ResendFailedIpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resendFailedIpn?: shared.ResendFailedIpn;
}
