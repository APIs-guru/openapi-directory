import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WipeAction
/** 
 * An action to reset a fully managed device or delete a work profile. Note: blockAction must also be specified.
**/
export class WipeAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=preserveFrp" })
  preserveFrp?: boolean;

  @Metadata({ data: "json, name=wipeAfterDays" })
  wipeAfterDays?: number;
}
