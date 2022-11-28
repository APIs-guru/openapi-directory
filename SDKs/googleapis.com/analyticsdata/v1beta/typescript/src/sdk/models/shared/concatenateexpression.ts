import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConcatenateExpression
/** 
 * Used to combine dimension values to a single dimension.
**/
export class ConcatenateExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionNames" })
  dimensionNames?: string[];
}
