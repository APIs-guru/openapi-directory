import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RateTable } from "./ratetable";


// RateTableResponse
/** 
 * The response container for with information on a seller's shipping rate tables.
**/
export class RateTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rateTables", elemType: shared.RateTable })
  rateTables?: RateTable[];
}
