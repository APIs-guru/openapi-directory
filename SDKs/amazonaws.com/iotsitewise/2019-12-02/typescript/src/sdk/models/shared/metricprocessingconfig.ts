import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComputeLocationEnum } from "./computelocationenum";



// MetricProcessingConfig
/** 
 * The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.
**/
export class MetricProcessingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computeLocation" })
  computeLocation: ComputeLocationEnum;
}
