import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Continent } from "./continent";



// ContinentList
/** 
 * Continents List
**/
export class ContinentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continents", elemType: Continent })
  continents: Continent[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
