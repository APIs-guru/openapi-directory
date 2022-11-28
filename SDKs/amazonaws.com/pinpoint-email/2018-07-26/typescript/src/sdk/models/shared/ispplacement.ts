import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacementStatistics } from "./placementstatistics";



// IspPlacement
/** 
 * An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
**/
export class IspPlacement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IspName" })
  ispName?: string;

  @SpeakeasyMetadata({ data: "json, name=PlacementStatistics" })
  placementStatistics?: PlacementStatistics;
}
