import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";


// PendingModifiedServiceUpdate
/** 
 * Update action that has yet to be processed for the corresponding apply/stop request
**/
export class PendingModifiedServiceUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServiceUpdateName" })
  serviceUpdateName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ServiceUpdateStatusEnum;
}
