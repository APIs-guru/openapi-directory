import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Row
/** 
 * A representation of a row in a relational table.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSpecIds" })
  columnSpecIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[];
}
