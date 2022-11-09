import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JourneyResponse } from "./journeyresponse";


// JourneysResponse
/** 
 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
**/
export class JourneysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.JourneyResponse })
  item: JourneyResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
