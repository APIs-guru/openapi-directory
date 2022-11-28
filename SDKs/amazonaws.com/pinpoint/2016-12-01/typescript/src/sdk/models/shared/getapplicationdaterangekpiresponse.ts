import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDateRangeKpiResponse } from "./applicationdaterangekpiresponse";



export class GetApplicationDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationDateRangeKpiResponse" })
  applicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse;
}
