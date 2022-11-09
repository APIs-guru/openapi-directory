import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivitiesResponse } from "./activitiesresponse";


export class GetCampaignActivitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivitiesResponse" })
  activitiesResponse: ActivitiesResponse;
}
