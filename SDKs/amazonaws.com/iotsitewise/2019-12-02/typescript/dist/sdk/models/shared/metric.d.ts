import { SpeakeasyBase } from "../../../internal/utils";
import { MetricProcessingConfig } from "./metricprocessingconfig";
import { ExpressionVariable } from "./expressionvariable";
import { MetricWindow } from "./metricwindow";
/**
 * <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p>
**/
export declare class Metric extends SpeakeasyBase {
    expression: string;
    processingConfig?: MetricProcessingConfig;
    variables: ExpressionVariable[];
    window: MetricWindow;
}
