import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JourneyDateRangeKpiResponse } from "./journeydaterangekpiresponse";



export class GetJourneyDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JourneyDateRangeKpiResponse" })
  journeyDateRangeKpiResponse: JourneyDateRangeKpiResponse;
}
