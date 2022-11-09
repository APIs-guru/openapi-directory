import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Model } from "./model";


// ListModelsResponse
/** 
 * Response message for AutoMl.ListModels.
**/
export class ListModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=model", elemType: shared.Model })
  model?: Model[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
