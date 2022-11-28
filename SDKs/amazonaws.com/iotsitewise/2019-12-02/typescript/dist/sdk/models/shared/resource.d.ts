import { SpeakeasyBase } from "../../../internal/utils";
import { PortalResource } from "./portalresource";
import { ProjectResource } from "./projectresource";
/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
**/
export declare class Resource extends SpeakeasyBase {
    portal?: PortalResource;
    project?: ProjectResource;
}
