import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PortalResource } from "./portalresource";
import { ProjectResource } from "./projectresource";


// Resource
/** 
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=portal" })
  portal?: PortalResource;

  @Metadata({ data: "json, name=project" })
  project?: ProjectResource;
}
