import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlacementStatistics } from "./placementstatistics";


// IspPlacement
/** 
 * An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
**/
export class IspPlacement extends SpeakeasyBase {
  @Metadata({ data: "json, name=IspName" })
  ispName?: string;

  @Metadata({ data: "json, name=PlacementStatistics" })
  placementStatistics?: PlacementStatistics;
}
