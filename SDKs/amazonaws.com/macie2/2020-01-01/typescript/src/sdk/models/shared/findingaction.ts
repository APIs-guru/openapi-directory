import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FindingActionTypeEnum } from "./findingactiontypeenum";
import { ApiCallDetails } from "./apicalldetails";


// FindingAction
/** 
 * Provides information about an action that occurred for a resource and produced a policy finding.
**/
export class FindingAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionType" })
  actionType?: FindingActionTypeEnum;

  @Metadata({ data: "json, name=apiCallDetails" })
  apiCallDetails?: ApiCallDetails;
}
