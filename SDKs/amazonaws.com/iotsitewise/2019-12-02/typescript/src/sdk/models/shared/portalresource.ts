import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortalResource
/** 
 * Identifies an IoT SiteWise Monitor portal.
**/
export class PortalResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}
