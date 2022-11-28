import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Endpoint
/** 
 * Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=CachePeriodInMinutes" })
  cachePeriodInMinutes: number;
}
