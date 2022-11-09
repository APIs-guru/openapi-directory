import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Endpoint
/** 
 * Represents an available endpoint against which to make API calls agaisnt, as well as the TTL for that endpoint.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address: string;

  @Metadata({ data: "json, name=CachePeriodInMinutes" })
  cachePeriodInMinutes: number;
}
