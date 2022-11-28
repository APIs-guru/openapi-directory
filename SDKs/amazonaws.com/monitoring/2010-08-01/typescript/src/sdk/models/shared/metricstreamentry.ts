import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricStreamOutputFormatEnum } from "./metricstreamoutputformatenum";



// MetricStreamEntry
/** 
 * This structure contains the configuration information about one metric stream.
**/
export class MetricStreamEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: string;

  @SpeakeasyMetadata()
  creationDate?: Date;

  @SpeakeasyMetadata()
  firehoseArn?: string;

  @SpeakeasyMetadata()
  lastUpdateDate?: Date;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  outputFormat?: MetricStreamOutputFormatEnum;

  @SpeakeasyMetadata()
  state?: string;
}
