import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
/**
 *  Result structure used for requests to list projects in AWS Mobile Hub.
**/
export declare class ListProjectsResult extends SpeakeasyBase {
    nextToken?: string;
    projects?: ProjectSummary[];
}
