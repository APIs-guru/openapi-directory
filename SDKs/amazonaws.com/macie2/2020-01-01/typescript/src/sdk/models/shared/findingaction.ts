import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingActionTypeEnum } from "./findingactiontypeenum";
import { ApiCallDetails } from "./apicalldetails";



// FindingAction
/** 
 * Provides information about an action that occurred for a resource and produced a policy finding.
**/
export class FindingAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionType" })
  actionType?: FindingActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=apiCallDetails" })
  apiCallDetails?: ApiCallDetails;
}
