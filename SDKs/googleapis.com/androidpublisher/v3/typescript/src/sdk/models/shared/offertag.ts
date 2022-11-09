import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OfferTag
/** 
 * Represents a custom tag specified for base plans and subscription offers.
**/
export class OfferTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
