import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TeamLocation extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=venue_id" })
  venueId?: number;

  @Metadata({ data: "json, name=year_constructed" })
  yearConstructed?: number;

  @Metadata({ data: "json, name=zip" })
  zip?: string;
}


export class Team extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=alt_color" })
  altColor?: string;

  @Metadata({ data: "json, name=alt_name_1" })
  altName1?: string;

  @Metadata({ data: "json, name=alt_name_2" })
  altName2?: string;

  @Metadata({ data: "json, name=alt_name_3" })
  altName3?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=conference" })
  conference?: string;

  @Metadata({ data: "json, name=division" })
  division?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=location" })
  location?: TeamLocation;

  @Metadata({ data: "json, name=logos" })
  logos?: string[];

  @Metadata({ data: "json, name=mascot" })
  mascot?: string;

  @Metadata({ data: "json, name=school" })
  school?: string;
}
