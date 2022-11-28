import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyResponse } from "./journeyresponse";



// JourneysResponse
/** 
 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
**/
export class JourneysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: JourneyResponse })
  item: JourneyResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
