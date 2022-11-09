import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Player extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=home_city" })
  homeCity?: string;

  @Metadata({ data: "json, name=home_country" })
  homeCountry?: string;

  @Metadata({ data: "json, name=home_county_fips" })
  homeCountyFips?: string;

  @Metadata({ data: "json, name=home_latitude" })
  homeLatitude?: number;

  @Metadata({ data: "json, name=home_longitude" })
  homeLongitude?: number;

  @Metadata({ data: "json, name=home_state" })
  homeState?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=jersey" })
  jersey?: number;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=position" })
  position?: string;

  @Metadata({ data: "json, name=recruit_ids" })
  recruitIds?: number[];

  @Metadata({ data: "json, name=team" })
  team?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;

  @Metadata({ data: "json, name=year" })
  year?: number;
}
