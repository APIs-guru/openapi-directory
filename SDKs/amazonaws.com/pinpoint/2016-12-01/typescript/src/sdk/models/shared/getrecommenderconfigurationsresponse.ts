import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListRecommenderConfigurationsResponse } from "./listrecommenderconfigurationsresponse";



export class GetRecommenderConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ListRecommenderConfigurationsResponse" })
  listRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse;
}
