import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectSummary } from "./projectsummary";


// ListProjectsResult
/** 
 *  Result structure used for requests to list projects in AWS Mobile Hub. 
**/
export class ListProjectsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projects", elemType: shared.ProjectSummary })
  projects?: ProjectSummary[];
}
