import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";



export class ListProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projectSummaries", elemType: ProjectSummary })
  projectSummaries: ProjectSummary[];
}
