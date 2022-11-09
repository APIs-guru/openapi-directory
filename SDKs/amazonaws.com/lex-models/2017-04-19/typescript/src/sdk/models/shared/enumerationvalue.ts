import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnumerationValue
/** 
 * <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul>
**/
export class EnumerationValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=synonyms" })
  synonyms?: string[];

  @Metadata({ data: "json, name=value" })
  value: string;
}
