import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaceGeometry } from "./placegeometry";
/**
 * Contains details about addresses or points of interest that match the search criteria.
**/
export declare class Place extends SpeakeasyBase {
    addressNumber?: string;
    country?: string;
    geometry: PlaceGeometry;
    label?: string;
    municipality?: string;
    neighborhood?: string;
    postalCode?: string;
    region?: string;
    street?: string;
    subRegion?: string;
}
