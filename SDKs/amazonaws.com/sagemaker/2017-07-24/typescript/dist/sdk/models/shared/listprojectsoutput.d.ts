import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
export declare class ListProjectsOutput extends SpeakeasyBase {
    nextToken?: string;
    projectSummaryList: ProjectSummary[];
}
