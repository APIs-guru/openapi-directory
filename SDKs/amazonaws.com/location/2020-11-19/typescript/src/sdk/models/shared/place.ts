import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaceGeometry } from "./placegeometry";


// Place
/** 
 * Contains details about addresses or points of interest that match the search criteria.
**/
export class Place extends SpeakeasyBase {
  @Metadata({ data: "json, name=AddressNumber" })
  addressNumber?: string;

  @Metadata({ data: "json, name=Country" })
  country?: string;

  @Metadata({ data: "json, name=Geometry" })
  geometry: PlaceGeometry;

  @Metadata({ data: "json, name=Label" })
  label?: string;

  @Metadata({ data: "json, name=Municipality" })
  municipality?: string;

  @Metadata({ data: "json, name=Neighborhood" })
  neighborhood?: string;

  @Metadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=Street" })
  street?: string;

  @Metadata({ data: "json, name=SubRegion" })
  subRegion?: string;
}
