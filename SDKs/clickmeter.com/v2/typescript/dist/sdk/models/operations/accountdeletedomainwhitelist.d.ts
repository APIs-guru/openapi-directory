import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountDeleteDomainWhitelistPathParams extends SpeakeasyBase {
    whitelistId: string;
}
export declare class AccountDeleteDomainWhitelistRequest extends SpeakeasyBase {
    pathParams: AccountDeleteDomainWhitelistPathParams;
}
export declare class AccountDeleteDomainWhitelistResponse extends SpeakeasyBase {
    apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
