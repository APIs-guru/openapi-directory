import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountDeleteGuestPathParams extends SpeakeasyBase {
    guestId: number;
}
export declare class AccountDeleteGuestRequest extends SpeakeasyBase {
    pathParams: AccountDeleteGuestPathParams;
}
export declare class AccountDeleteGuestResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
