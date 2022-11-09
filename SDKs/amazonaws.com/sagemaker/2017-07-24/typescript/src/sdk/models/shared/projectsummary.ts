import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectStatusEnum } from "./projectstatusenum";


// ProjectSummary
/** 
 * Information about a project.
**/
export class ProjectSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=ProjectDescription" })
  projectDescription?: string;

  @Metadata({ data: "json, name=ProjectId" })
  projectId: string;

  @Metadata({ data: "json, name=ProjectName" })
  projectName: string;

  @Metadata({ data: "json, name=ProjectStatus" })
  projectStatus: ProjectStatusEnum;
}
