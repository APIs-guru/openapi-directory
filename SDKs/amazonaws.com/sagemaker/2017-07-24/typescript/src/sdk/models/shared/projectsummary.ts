import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";



// ProjectSummary
/** 
 * Information about a project.
**/
export class ProjectSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectDescription" })
  projectDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectName" })
  projectName: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectStatus" })
  projectStatus: ProjectStatusEnum;
}
