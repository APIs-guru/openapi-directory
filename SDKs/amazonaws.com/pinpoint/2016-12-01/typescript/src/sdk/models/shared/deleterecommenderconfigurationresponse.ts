import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecommenderConfigurationResponse } from "./recommenderconfigurationresponse";


export class DeleteRecommenderConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=RecommenderConfigurationResponse" })
  recommenderConfigurationResponse: RecommenderConfigurationResponse;
}
