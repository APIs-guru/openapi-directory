import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectResource
/** 
 * Identifies a specific IoT SiteWise Monitor project.
**/
export class ProjectResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
