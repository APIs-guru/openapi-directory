import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
/**
 *  Result structure used in response to request to delete a project.
**/
export declare class DeleteProjectResult extends SpeakeasyBase {
    deletedResources?: Resource[];
    orphanedResources?: Resource[];
}
