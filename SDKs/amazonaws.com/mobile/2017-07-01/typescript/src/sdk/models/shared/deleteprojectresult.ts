import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// DeleteProjectResult
/** 
 *  Result structure used in response to request to delete a project. 
**/
export class DeleteProjectResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedResources", elemType: Resource })
  deletedResources?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=orphanedResources", elemType: Resource })
  orphanedResources?: Resource[];
}
