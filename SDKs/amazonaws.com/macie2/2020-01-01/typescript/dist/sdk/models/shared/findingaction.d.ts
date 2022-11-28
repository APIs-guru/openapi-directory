import { SpeakeasyBase } from "../../../internal/utils";
import { FindingActionTypeEnum } from "./findingactiontypeenum";
import { ApiCallDetails } from "./apicalldetails";
/**
 * Provides information about an action that occurred for a resource and produced a policy finding.
**/
export declare class FindingAction extends SpeakeasyBase {
    actionType?: FindingActionTypeEnum;
    apiCallDetails?: ApiCallDetails;
}
