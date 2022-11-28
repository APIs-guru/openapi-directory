import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricStat } from "./metricstat";



// MetricDataQuery
/** 
 * <p>This structure is used in both <code>GetMetricData</code> and <code>PutMetricAlarm</code>. The supported use of this structure is different for those two operations.</p> <p>When used in <code>GetMetricData</code>, it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data. A single <code>GetMetricData</code> call can include up to 500 <code>MetricDataQuery</code> structures.</p> <p>When used in <code>PutMetricAlarm</code>, it enables you to create an alarm based on a metric math expression. Each <code>MetricDataQuery</code> in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single <code>PutMetricAlarm</code> call can include up to 20 <code>MetricDataQuery</code> structures in the array. The 20 structures can include as many as 10 structures that contain a <code>MetricStat</code> parameter to retrieve a metric, and as many as 10 structures that contain the <code>Expression</code> parameter to perform a math expression. Of those <code>Expression</code> structures, one must have <code>True</code> as the value for <code>ReturnData</code>. The result of this expression is the value the alarm watches.</p> <p>Any expression used in a <code>PutMetricAlarm</code> operation must return a single time series. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User Guide</i>.</p> <p>Some of the parameters of this structure also have different uses whether you are using this structure in a <code>GetMetricData</code> operation or a <code>PutMetricAlarm</code> operation. These differences are explained in the following parameter list.</p>
**/
export class MetricDataQuery extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountId?: string;

  @SpeakeasyMetadata()
  expression?: string;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  label?: string;

  @SpeakeasyMetadata()
  metricStat?: MetricStat;

  @SpeakeasyMetadata()
  period?: number;

  @SpeakeasyMetadata()
  returnData?: boolean;
}
