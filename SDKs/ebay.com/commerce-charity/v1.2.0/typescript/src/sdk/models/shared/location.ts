import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { GeoCoordinates } from "./geocoordinates";



export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=geoCoordinates" })
  geoCoordinates?: GeoCoordinates;
}
