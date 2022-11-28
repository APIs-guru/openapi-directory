import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyResponse } from "./journeyresponse";



export class UpdateJourneyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneyResponse" })
  journeyResponse: JourneyResponse;
}
