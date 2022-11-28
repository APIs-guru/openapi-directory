import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaceGeometry } from "./placegeometry";



// Place
/** 
 * Contains details about addresses or points of interest that match the search criteria.
**/
export class Place extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AddressNumber" })
  addressNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=Geometry" })
  geometry: PlaceGeometry;

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=Municipality" })
  municipality?: string;

  @SpeakeasyMetadata({ data: "json, name=Neighborhood" })
  neighborhood?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=Street" })
  street?: string;

  @SpeakeasyMetadata({ data: "json, name=SubRegion" })
  subRegion?: string;
}
