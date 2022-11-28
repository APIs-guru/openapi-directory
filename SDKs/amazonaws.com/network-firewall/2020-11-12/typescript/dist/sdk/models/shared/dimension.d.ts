import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The value to use in an Amazon CloudWatch custom metric dimension. This is used in the <code>PublishMetrics</code> <a>CustomAction</a>. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric. </p> <p>AWS Network Firewall sets the dimension name to <code>CustomAction</code> and you provide the dimension value. </p> <p>For more information about CloudWatch custom metric dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions">Publishing Custom Metrics</a> in the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>
**/
export declare class Dimension extends SpeakeasyBase {
    value: string;
}
