import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResolveInvitationTokenQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class ResolveInvitationTokenSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class ResolveInvitationTokenRequest extends SpeakeasyBase {
    queryParams: ResolveInvitationTokenQueryParams;
    security: ResolveInvitationTokenSecurity;
}
export declare class ResolveInvitationTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    conversation?: any;
    statusCode: number;
}
