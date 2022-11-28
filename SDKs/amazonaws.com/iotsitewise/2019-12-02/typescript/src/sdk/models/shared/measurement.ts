import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeasurementProcessingConfig } from "./measurementprocessingconfig";



// Measurement
/** 
 * Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.
**/
export class Measurement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processingConfig" })
  processingConfig?: MeasurementProcessingConfig;
}
