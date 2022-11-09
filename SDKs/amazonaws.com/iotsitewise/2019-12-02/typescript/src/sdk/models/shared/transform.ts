import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransformProcessingConfig } from "./transformprocessingconfig";
import { ExpressionVariable } from "./expressionvariable";


// Transform
/** 
 * <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
**/
export class Transform extends SpeakeasyBase {
  @Metadata({ data: "json, name=expression" })
  expression: string;

  @Metadata({ data: "json, name=processingConfig" })
  processingConfig?: TransformProcessingConfig;

  @Metadata({ data: "json, name=variables", elemType: shared.ExpressionVariable })
  variables: ExpressionVariable[];
}
