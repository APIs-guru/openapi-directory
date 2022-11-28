import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfigurationResponse } from "./recommenderconfigurationresponse";



export class UpdateRecommenderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecommenderConfigurationResponse" })
  recommenderConfigurationResponse: RecommenderConfigurationResponse;
}
