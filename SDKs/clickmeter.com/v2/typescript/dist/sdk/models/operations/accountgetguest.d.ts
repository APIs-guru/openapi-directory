import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountGetGuestPathParams extends SpeakeasyBase {
    guestId: number;
}
export declare class AccountGetGuestRequest extends SpeakeasyBase {
    pathParams: AccountGetGuestPathParams;
}
export declare class AccountGetGuestResponse extends SpeakeasyBase {
    apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
