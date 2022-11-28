import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortalResource } from "./portalresource";
import { ProjectResource } from "./projectresource";



// Resource
/** 
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portal" })
  portal?: PortalResource;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: ProjectResource;
}
