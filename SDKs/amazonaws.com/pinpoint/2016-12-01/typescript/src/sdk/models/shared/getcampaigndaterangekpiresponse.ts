import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignDateRangeKpiResponse } from "./campaigndaterangekpiresponse";


export class GetCampaignDateRangeKpiResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignDateRangeKpiResponse" })
  campaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;
}
