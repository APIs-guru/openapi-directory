import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyComponentsVendorsDestinyPublicVendorComponent
/** 
 * This component contains essential/summary information about the vendor from the perspective of a character-agnostic view.
**/
export class DestinyComponentsVendorsDestinyPublicVendorComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  nextRefreshDate?: Date;

  @SpeakeasyMetadata()
  vendorHash?: number;
}
