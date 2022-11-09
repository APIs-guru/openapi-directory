import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionExpression } from "./dimensionexpression";


// Dimension
/** 
 * Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensionExpression" })
  dimensionExpression?: DimensionExpression;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
