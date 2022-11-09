import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Repository } from "./repository";


// ListRepositoriesResponse
/** 
 * The response from listing repositories.
**/
export class ListRepositoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=repositories", elemType: shared.Repository })
  repositories?: Repository[];
}
