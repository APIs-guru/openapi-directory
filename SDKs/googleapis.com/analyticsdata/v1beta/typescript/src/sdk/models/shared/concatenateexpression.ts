import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConcatenateExpression
/** 
 * Used to combine dimension values to a single dimension.
**/
export class ConcatenateExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];
}
