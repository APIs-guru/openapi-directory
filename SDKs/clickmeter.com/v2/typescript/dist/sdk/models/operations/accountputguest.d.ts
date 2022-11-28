import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountPutGuestRequests extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    apiCoreDtoAccountingGuest1?: shared.ApiCoreDtoAccountingGuest;
    apiCoreDtoAccountingGuest2?: shared.ApiCoreDtoAccountingGuest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccountPutGuestRequest extends SpeakeasyBase {
    request: AccountPutGuestRequests;
}
export declare class AccountPutGuestResponse extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
