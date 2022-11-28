import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityFilterNameEnum } from "./entityfilternameenum";



// EntityFilter
/** 
 * An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.
**/
export class EntityFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: EntityFilterNameEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string[];
}
