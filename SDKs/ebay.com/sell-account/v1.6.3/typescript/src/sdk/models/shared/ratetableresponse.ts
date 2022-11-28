import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RateTable } from "./ratetable";



// RateTableResponse
/** 
 * The response container for with information on a seller's shipping rate tables.
**/
export class RateTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rateTables", elemType: RateTable })
  rateTables?: RateTable[];
}
