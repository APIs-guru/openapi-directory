import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Row
/** 
 * A representation of a row in a relational table.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnSpecIds" })
  columnSpecIds?: string[];

  @Metadata({ data: "json, name=values" })
  values?: any[];
}
