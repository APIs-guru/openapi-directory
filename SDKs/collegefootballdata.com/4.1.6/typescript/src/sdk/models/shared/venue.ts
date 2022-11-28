import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VenueLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}


export class Venue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dome" })
  dome?: boolean;

  @SpeakeasyMetadata({ data: "json, name=elevation" })
  elevation?: number;

  @SpeakeasyMetadata({ data: "json, name=grass" })
  grass?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: VenueLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
