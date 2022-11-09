import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectStatusEnum } from "./projectstatusenum";


// ProjectDescription
/** 
 * A description of a Amazon Rekognition Custom Labels project.
**/
export class ProjectDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @Metadata({ data: "json, name=ProjectArn" })
  projectArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ProjectStatusEnum;
}
