import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountDeleteIpBlacklistPathParams extends SpeakeasyBase {
    blacklistId: string;
}
export declare class AccountDeleteIpBlacklistRequest extends SpeakeasyBase {
    pathParams: AccountDeleteIpBlacklistPathParams;
}
export declare class AccountDeleteIpBlacklistResponse extends SpeakeasyBase {
    apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
