import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountPutIpBlacklistRequests extends SpeakeasyBase {
    apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;
    apiCoreDtoAccountingIpBlacklistEntry1?: shared.ApiCoreDtoAccountingIpBlacklistEntry;
    apiCoreDtoAccountingIpBlacklistEntry2?: shared.ApiCoreDtoAccountingIpBlacklistEntry;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccountPutIpBlacklistRequest extends SpeakeasyBase {
    request: AccountPutIpBlacklistRequests;
}
export declare class AccountPutIpBlacklistResponse extends SpeakeasyBase {
    apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
