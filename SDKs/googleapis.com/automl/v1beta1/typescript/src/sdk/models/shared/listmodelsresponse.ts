import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";



// ListModelsResponse
/** 
 * Response message for AutoMl.ListModels.
**/
export class ListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model", elemType: Model })
  model?: Model[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
