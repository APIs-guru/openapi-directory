import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectSummary
/** 
 *  Summary information about an AWS Mobile Hub project. 
**/
export class ProjectSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
