import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsVendorsDestinyVendorGroup } from "./destinycomponentsvendorsdestinyvendorgroup";



// DestinyComponentsVendorsDestinyVendorGroupComponent
/** 
 * This component returns references to all of the Vendors in the response, grouped by categorizations that Bungie has deemed to be interesting, in the order in which both the groups and the vendors within that group should be rendered.
**/
export class DestinyComponentsVendorsDestinyVendorGroupComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsVendorsDestinyVendorGroup })
  groups?: DestinyComponentsVendorsDestinyVendorGroup[];
}
