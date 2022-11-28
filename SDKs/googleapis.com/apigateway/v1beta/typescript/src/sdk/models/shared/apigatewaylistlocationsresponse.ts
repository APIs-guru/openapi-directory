import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayLocation } from "./apigatewaylocation";



// ApigatewayListLocationsResponse
/** 
 * The response message for Locations.ListLocations.
**/
export class ApigatewayListLocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locations", elemType: ApigatewayLocation })
  locations?: ApigatewayLocation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
