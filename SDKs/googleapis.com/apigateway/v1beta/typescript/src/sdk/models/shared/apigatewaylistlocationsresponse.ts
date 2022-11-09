import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApigatewayLocation } from "./apigatewaylocation";


// ApigatewayListLocationsResponse
/** 
 * The response message for Locations.ListLocations.
**/
export class ApigatewayListLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=locations", elemType: shared.ApigatewayLocation })
  locations?: ApigatewayLocation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
