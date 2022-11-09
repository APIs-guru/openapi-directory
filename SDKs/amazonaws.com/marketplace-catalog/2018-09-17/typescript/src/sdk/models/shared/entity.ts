import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entity
/** 
 * An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer. 
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=Type" })
  type: string;
}
