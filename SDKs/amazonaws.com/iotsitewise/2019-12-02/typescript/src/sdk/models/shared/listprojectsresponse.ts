import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectSummary } from "./projectsummary";


export class ListProjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=projectSummaries", elemType: shared.ProjectSummary })
  projectSummaries: ProjectSummary[];
}
