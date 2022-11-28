import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloseStatusEnum } from "./closestatusenum";



// CloseStatusFilter
/** 
 * Used to filter the closed workflow executions in visibility APIs by their close status.
**/
export class CloseStatusFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CloseStatusEnum;
}
