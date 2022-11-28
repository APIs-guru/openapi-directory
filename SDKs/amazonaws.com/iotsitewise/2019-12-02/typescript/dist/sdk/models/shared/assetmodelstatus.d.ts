import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { AssetModelStateEnum } from "./assetmodelstateenum";
/**
 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
**/
export declare class AssetModelStatus extends SpeakeasyBase {
    error?: ErrorDetails;
    state: AssetModelStateEnum;
}
