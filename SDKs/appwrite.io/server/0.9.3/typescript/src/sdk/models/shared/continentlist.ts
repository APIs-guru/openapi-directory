import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Continent } from "./continent";


// ContinentList
/** 
 * Continents List
**/
export class ContinentList extends SpeakeasyBase {
  @Metadata({ data: "json, name=continents", elemType: shared.Continent })
  continents: Continent[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
