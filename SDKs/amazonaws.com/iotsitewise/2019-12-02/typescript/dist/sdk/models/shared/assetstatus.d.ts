import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetails } from "./errordetails";
import { AssetStateEnum } from "./assetstateenum";
/**
 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
**/
export declare class AssetStatus extends SpeakeasyBase {
    error?: ErrorDetails;
    state: AssetStateEnum;
}
