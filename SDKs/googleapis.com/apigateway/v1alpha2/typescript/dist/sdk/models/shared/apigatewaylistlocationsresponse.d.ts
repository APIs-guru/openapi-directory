import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ApigatewayLocation } from "./apigatewaylocation";
/**
 * The response message for Locations.ListLocations.
**/
export declare class ApigatewayListLocationsResponse extends SpeakeasyBase {
    locations?: ApigatewayLocation[];
    nextPageToken?: string;
}
