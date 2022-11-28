import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LicenseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days_until_expiration" })
  daysUntilExpiration?: number;

  @SpeakeasyMetadata({ data: "json, name=expire_at" })
  expireAt?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=seats" })
  seats?: any;

  @SpeakeasyMetadata({ data: "json, name=seats_available" })
  seatsAvailable?: any;

  @SpeakeasyMetadata({ data: "json, name=seats_used" })
  seatsUsed?: number;
}
