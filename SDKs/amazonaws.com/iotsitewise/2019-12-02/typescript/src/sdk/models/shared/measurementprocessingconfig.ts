import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardingConfig } from "./forwardingconfig";



// MeasurementProcessingConfig
/** 
 * The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.
**/
export class MeasurementProcessingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forwardingConfig" })
  forwardingConfig: ForwardingConfig;
}
