import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
/**
 * Update action that has yet to be processed for the corresponding apply/stop request
**/
export declare class PendingModifiedServiceUpdate extends SpeakeasyBase {
    serviceUpdateName?: string;
    status?: ServiceUpdateStatusEnum;
}
