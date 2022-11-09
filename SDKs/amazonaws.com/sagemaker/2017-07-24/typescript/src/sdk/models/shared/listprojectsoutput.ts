import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectSummary } from "./projectsummary";


export class ListProjectsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProjectSummaryList", elemType: shared.ProjectSummary })
  projectSummaryList: ProjectSummary[];
}
