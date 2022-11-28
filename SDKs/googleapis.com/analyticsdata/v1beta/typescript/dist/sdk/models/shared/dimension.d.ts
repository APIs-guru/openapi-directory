import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionExpression } from "./dimensionexpression";
/**
 * Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
**/
export declare class Dimension extends SpeakeasyBase {
    dimensionExpression?: DimensionExpression;
    name?: string;
}
