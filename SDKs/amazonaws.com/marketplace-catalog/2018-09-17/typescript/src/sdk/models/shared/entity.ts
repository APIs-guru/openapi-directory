import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Entity
/** 
 * An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. 
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}
