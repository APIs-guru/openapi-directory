import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorDetails } from "./errordetails";
import { AssetStateEnum } from "./assetstateenum";


// AssetStatus
/** 
 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
**/
export class AssetStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ErrorDetails;

  @Metadata({ data: "json, name=state" })
  state: AssetStateEnum;
}
