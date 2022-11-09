import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MeasurementProcessingConfig } from "./measurementprocessingconfig";
/**
 * Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.
**/
export declare class Measurement extends SpeakeasyBase {
    processingConfig?: MeasurementProcessingConfig;
}
