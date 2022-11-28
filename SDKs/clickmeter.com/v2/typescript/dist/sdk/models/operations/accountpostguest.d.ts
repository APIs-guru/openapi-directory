import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountPostGuestPathParams extends SpeakeasyBase {
    guestId: number;
}
export declare class AccountPostGuestRequests extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    apiCoreDtoAccountingGuest1?: shared.ApiCoreDtoAccountingGuest;
    apiCoreDtoAccountingGuest2?: shared.ApiCoreDtoAccountingGuest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class AccountPostGuestRequest extends SpeakeasyBase {
    pathParams: AccountPostGuestPathParams;
    request: AccountPostGuestRequests;
}
export declare class AccountPostGuestResponse extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
