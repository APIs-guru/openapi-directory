import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivitiesResponse } from "./activitiesresponse";



export class GetCampaignActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivitiesResponse" })
  activitiesResponse: ActivitiesResponse;
}
