import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";
import { Resource } from "./resource";


// DeleteProjectResult
/** 
 *  Result structure used in response to request to delete a project. 
**/
export class DeleteProjectResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedResources", elemType: shared.Resource })
  deletedResources?: Resource[];

  @Metadata({ data: "json, name=orphanedResources", elemType: shared.Resource })
  orphanedResources?: Resource[];
}
