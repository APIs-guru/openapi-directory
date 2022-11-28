import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignDateRangeKpiResponse } from "./campaigndaterangekpiresponse";



export class GetCampaignDateRangeKpiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignDateRangeKpiResponse" })
  campaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;
}
