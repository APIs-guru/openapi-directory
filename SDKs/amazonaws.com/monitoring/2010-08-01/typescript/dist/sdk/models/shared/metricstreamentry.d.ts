import { SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamOutputFormatEnum } from "./metricstreamoutputformatenum";
/**
 * This structure contains the configuration information about one metric stream.
**/
export declare class MetricStreamEntry extends SpeakeasyBase {
    arn?: string;
    creationDate?: Date;
    firehoseArn?: string;
    lastUpdateDate?: Date;
    name?: string;
    outputFormat?: MetricStreamOutputFormatEnum;
    state?: string;
}
