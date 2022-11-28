import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectResource
/** 
 * Identifies a specific IoT SiteWise Monitor project.
**/
export class ProjectResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
