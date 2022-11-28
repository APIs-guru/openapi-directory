import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountPutDomainWhitelistRequests extends SpeakeasyBase {
    apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;
    apiCoreDtoAccountingDomainWhitelistEntry1?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;
    apiCoreDtoAccountingDomainWhitelistEntry2?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccountPutDomainWhitelistRequest extends SpeakeasyBase {
    request: AccountPutDomainWhitelistRequests;
}
export declare class AccountPutDomainWhitelistResponse extends SpeakeasyBase {
    apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
