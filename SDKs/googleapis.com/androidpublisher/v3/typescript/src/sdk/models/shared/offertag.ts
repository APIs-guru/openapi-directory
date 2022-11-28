import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OfferTag
/** 
 * Represents a custom tag specified for base plans and subscription offers.
**/
export class OfferTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
