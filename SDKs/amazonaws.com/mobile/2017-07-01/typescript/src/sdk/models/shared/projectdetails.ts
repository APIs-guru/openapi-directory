import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
import { ProjectStateEnum } from "./projectstateenum";



// ProjectDetails
/** 
 *  Detailed information about an AWS Mobile Hub project. 
**/
export class ProjectDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consoleUrl" })
  consoleUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Resource })
  resources?: Resource[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ProjectStateEnum;
}
