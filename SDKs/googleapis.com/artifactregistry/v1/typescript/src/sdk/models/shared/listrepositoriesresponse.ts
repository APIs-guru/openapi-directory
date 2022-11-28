import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";



// ListRepositoriesResponse
/** 
 * The response from listing repositories.
**/
export class ListRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repositories", elemType: Repository })
  repositories?: Repository[];
}
