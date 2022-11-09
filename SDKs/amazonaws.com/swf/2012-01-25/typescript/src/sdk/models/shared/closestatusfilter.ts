import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloseStatusEnum } from "./closestatusenum";


// CloseStatusFilter
/** 
 * Used to filter the closed workflow executions in visibility APIs by their close status.
**/
export class CloseStatusFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: CloseStatusEnum;
}
