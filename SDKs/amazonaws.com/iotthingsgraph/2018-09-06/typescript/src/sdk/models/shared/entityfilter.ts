import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntityFilterNameEnum } from "./entityfilternameenum";


// EntityFilter
/** 
 * An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.
**/
export class EntityFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: EntityFilterNameEnum;

  @Metadata({ data: "json, name=value" })
  value?: string[];
}
