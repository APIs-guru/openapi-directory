import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { GeoCoordinates } from "./geocoordinates";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=geoCoordinates" })
  geoCoordinates?: GeoCoordinates;
}
