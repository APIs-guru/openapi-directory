import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { AssetModelStateEnum } from "./assetmodelstateenum";



// AssetModelStatus
/** 
 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
**/
export class AssetModelStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorDetails;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: AssetModelStateEnum;
}
