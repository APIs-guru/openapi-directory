import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamFilter } from "./metricstreamfilter";
import { MetricStreamOutputFormatEnum } from "./metricstreamoutputformatenum";



export class GetMetricStreamOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata({ elemType: MetricStreamFilter })
  excludeFilters?: MetricStreamFilter[];

  @SpeakeasyMetadata()
  firehoseArn?: string;

  @SpeakeasyMetadata({ elemType: MetricStreamFilter })
  includeFilters?: MetricStreamFilter[];

  @SpeakeasyMetadata()
  lastUpdateDate?: Date;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  outputFormat?: MetricStreamOutputFormatEnum;

  @SpeakeasyMetadata()
  roleArn?: string;

  @SpeakeasyMetadata()
  state?: string;
}
