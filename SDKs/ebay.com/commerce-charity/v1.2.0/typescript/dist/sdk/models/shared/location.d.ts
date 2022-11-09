import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { GeoCoordinates } from "./geocoordinates";
export declare class Location extends SpeakeasyBase {
    address?: Address;
    geoCoordinates?: GeoCoordinates;
}
