import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyComponentsVendorsDestinyVendorGroup
/** 
 * Represents a specific group of vendors that can be rendered in the recommended order.
 * How do we figure out this order? It's a long story, and will likely get more complicated over time.
**/
export class DestinyComponentsVendorsDestinyVendorGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vendorGroupHash?: number;

  @SpeakeasyMetadata()
  vendorHashes?: number[];
}
