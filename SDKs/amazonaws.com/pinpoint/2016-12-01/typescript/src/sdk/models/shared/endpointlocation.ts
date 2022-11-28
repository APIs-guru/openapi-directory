import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointLocation
/** 
 * Specifies geographic information about an endpoint.
**/
export class EndpointLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=City" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;
}
