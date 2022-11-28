import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";



export class AccountUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=defaultPaymentInstrumentId" })
  defaultPaymentInstrumentId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultPaymentMethodId" })
  defaultPaymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=minRatingPlaybackGuard" })
  minRatingPlaybackGuard?: string;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "json, name=trackingEnabled" })
  trackingEnabled?: boolean;
}
