import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TeamLocation extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=venue_id" })
  venueId?: number;

  @SpeakeasyMetadata({ data: "json, name=year_constructed" })
  yearConstructed?: number;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}


export class Team extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @SpeakeasyMetadata({ data: "json, name=alt_color" })
  altColor?: string;

  @SpeakeasyMetadata({ data: "json, name=alt_name_1" })
  altName1?: string;

  @SpeakeasyMetadata({ data: "json, name=alt_name_2" })
  altName2?: string;

  @SpeakeasyMetadata({ data: "json, name=alt_name_3" })
  altName3?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "json, name=division" })
  division?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: TeamLocation;

  @SpeakeasyMetadata({ data: "json, name=logos" })
  logos?: string[];

  @SpeakeasyMetadata({ data: "json, name=mascot" })
  mascot?: string;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;
}
