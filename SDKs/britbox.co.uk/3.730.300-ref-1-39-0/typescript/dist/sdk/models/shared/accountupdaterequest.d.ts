import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class AccountUpdateRequest extends SpeakeasyBase {
    address?: Address;
    defaultPaymentInstrumentId?: string;
    defaultPaymentMethodId?: string;
    firstName?: string;
    lastName?: string;
    minRatingPlaybackGuard?: string;
    segments?: string[];
    trackingEnabled?: boolean;
}
