import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
export declare class ListProjectsResponse extends SpeakeasyBase {
    nextToken?: string;
    projectSummaries: ProjectSummary[];
}
