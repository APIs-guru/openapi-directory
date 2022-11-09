import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectSummary } from "./projectsummary";
export declare class ListProjectsResponse extends SpeakeasyBase {
    nextToken?: string;
    projectSummaries: ProjectSummary[];
}
