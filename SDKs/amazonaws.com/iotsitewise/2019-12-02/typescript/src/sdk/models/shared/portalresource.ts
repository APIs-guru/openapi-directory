import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortalResource
/** 
 * Identifies an IoT SiteWise Monitor portal.
**/
export class PortalResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
