import { SpeakeasyBase } from "../../../internal/utils";
import { OperatorEnum } from "./operatorenum";
/**
 * <p>A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the <a>Search</a> API.</p> <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the equals operator.</p> <p>In search, there are several property types:</p> <dl> <dt>Metrics</dt> <dd> <p>To define a metric filter, enter a value using the form <code>"Metrics.&lt;name&gt;"</code>, where <code>&lt;name&gt;</code> is a metric name. For example, the following filter searches for training jobs with an <code>"accuracy"</code> metric greater than <code>"0.9"</code>:</p> <p> <code>{</code> </p> <p> <code>"Name": "Metrics.accuracy",</code> </p> <p> <code>"Operator": "GreaterThan",</code> </p> <p> <code>"Value": "0.9"</code> </p> <p> <code>}</code> </p> </dd> <dt>HyperParameters</dt> <dd> <p>To define a hyperparameter filter, enter a value with the form <code>"HyperParameters.&lt;name&gt;"</code>. Decimal hyperparameter values are treated as a decimal in a comparison if the specified <code>Value</code> is also a decimal value. If the specified <code>Value</code> is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a <code>"learning_rate"</code> hyperparameter that is less than <code>"0.5"</code>:</p> <p> <code> {</code> </p> <p> <code> "Name": "HyperParameters.learning_rate",</code> </p> <p> <code> "Operator": "LessThan",</code> </p> <p> <code> "Value": "0.5"</code> </p> <p> <code> }</code> </p> </dd> <dt>Tags</dt> <dd> <p>To define a tag filter, enter a value with the form <code>Tags.&lt;key&gt;</code>.</p> </dd> </dl>
**/
export declare class Filter extends SpeakeasyBase {
    name: string;
    operator?: OperatorEnum;
    value?: string;
}
