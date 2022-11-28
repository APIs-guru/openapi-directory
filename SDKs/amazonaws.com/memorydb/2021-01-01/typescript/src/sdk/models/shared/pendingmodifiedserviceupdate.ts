import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";



// PendingModifiedServiceUpdate
/** 
 * Update action that has yet to be processed for the corresponding apply/stop request
**/
export class PendingModifiedServiceUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ServiceUpdateStatusEnum;
}
