import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommenderConfigurationResponse } from "./recommenderconfigurationresponse";



export class CreateRecommenderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RecommenderConfigurationResponse" })
  recommenderConfigurationResponse: RecommenderConfigurationResponse;
}
