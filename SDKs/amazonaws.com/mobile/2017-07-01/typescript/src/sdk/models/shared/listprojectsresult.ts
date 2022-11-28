import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";



// ListProjectsResult
/** 
 *  Result structure used for requests to list projects in AWS Mobile Hub. 
**/
export class ListProjectsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectSummary })
  projects?: ProjectSummary[];
}
