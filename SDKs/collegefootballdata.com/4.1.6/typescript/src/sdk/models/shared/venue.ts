import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VenueLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}


export class Venue extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: number;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=dome" })
  dome?: boolean;

  @Metadata({ data: "json, name=elevation" })
  elevation?: number;

  @Metadata({ data: "json, name=grass" })
  grass?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=location" })
  location?: VenueLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=year" })
  year?: number;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}
