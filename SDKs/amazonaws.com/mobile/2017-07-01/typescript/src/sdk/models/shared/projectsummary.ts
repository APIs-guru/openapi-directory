import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectSummary
/** 
 *  Summary information about an AWS Mobile Hub project. 
**/
export class ProjectSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
