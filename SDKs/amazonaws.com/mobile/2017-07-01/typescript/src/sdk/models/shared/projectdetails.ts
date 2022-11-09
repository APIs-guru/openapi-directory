import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";
import { ProjectStateEnum } from "./projectstateenum";


// ProjectDetails
/** 
 *  Detailed information about an AWS Mobile Hub project. 
**/
export class ProjectDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=consoleUrl" })
  consoleUrl?: string;

  @Metadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=lastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Resource })
  resources?: Resource[];

  @Metadata({ data: "json, name=state" })
  state?: ProjectStateEnum;
}
