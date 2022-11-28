import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Player extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=home_city" })
  homeCity?: string;

  @SpeakeasyMetadata({ data: "json, name=home_country" })
  homeCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=home_county_fips" })
  homeCountyFips?: string;

  @SpeakeasyMetadata({ data: "json, name=home_latitude" })
  homeLatitude?: number;

  @SpeakeasyMetadata({ data: "json, name=home_longitude" })
  homeLongitude?: number;

  @SpeakeasyMetadata({ data: "json, name=home_state" })
  homeState?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=jersey" })
  jersey?: number;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "json, name=recruit_ids" })
  recruitIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}
