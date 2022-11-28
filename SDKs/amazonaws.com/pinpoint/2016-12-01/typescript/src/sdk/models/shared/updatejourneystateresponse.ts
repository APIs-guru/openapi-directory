import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyResponse } from "./journeyresponse";



export class UpdateJourneyStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneyResponse" })
  journeyResponse: JourneyResponse;
}
