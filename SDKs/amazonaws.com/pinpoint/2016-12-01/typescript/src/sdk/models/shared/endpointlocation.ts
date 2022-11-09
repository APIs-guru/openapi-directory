import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointLocation
/** 
 * Specifies geographic information about an endpoint.
**/
export class EndpointLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=City" })
  city?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=Longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;
}
