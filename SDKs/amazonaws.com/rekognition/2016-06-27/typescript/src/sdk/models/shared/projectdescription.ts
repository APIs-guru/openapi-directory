import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";



// ProjectDescription
/** 
 * A description of a Amazon Rekognition Custom Labels project.
**/
export class ProjectDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ProjectStatusEnum;
}
