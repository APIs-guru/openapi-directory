import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JourneyResponse } from "./journeyresponse";


export class DeleteJourneyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JourneyResponse" })
  journeyResponse: JourneyResponse;
}
