import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LicenseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=days_until_expiration" })
  daysUntilExpiration?: number;

  @Metadata({ data: "json, name=expire_at" })
  expireAt?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=seats" })
  seats?: any;

  @Metadata({ data: "json, name=seats_available" })
  seatsAvailable?: any;

  @Metadata({ data: "json, name=seats_used" })
  seatsUsed?: number;
}
