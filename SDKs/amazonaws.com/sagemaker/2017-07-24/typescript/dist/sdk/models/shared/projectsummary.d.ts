import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";
/**
 * Information about a project.
**/
export declare class ProjectSummary extends SpeakeasyBase {
    creationTime: Date;
    projectArn: string;
    projectDescription?: string;
    projectId: string;
    projectName: string;
    projectStatus: ProjectStatusEnum;
}
