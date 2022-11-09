import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


export class AccountUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=defaultPaymentInstrumentId" })
  defaultPaymentInstrumentId?: string;

  @Metadata({ data: "json, name=defaultPaymentMethodId" })
  defaultPaymentMethodId?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=minRatingPlaybackGuard" })
  minRatingPlaybackGuard?: string;

  @Metadata({ data: "json, name=segments" })
  segments?: string[];

  @Metadata({ data: "json, name=trackingEnabled" })
  trackingEnabled?: boolean;
}
