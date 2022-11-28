import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";



export class ListProjectsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectSummaryList", elemType: ProjectSummary })
  projectSummaryList: ProjectSummary[];
}
