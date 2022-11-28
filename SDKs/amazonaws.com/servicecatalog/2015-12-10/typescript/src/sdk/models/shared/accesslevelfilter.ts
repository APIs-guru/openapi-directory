import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevelFilterKeyEnum } from "./accesslevelfilterkeyenum";



// AccessLevelFilter
/** 
 * The access level to use to filter results.
**/
export class AccessLevelFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: AccessLevelFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
