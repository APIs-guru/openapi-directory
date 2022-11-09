import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessLevelFilterKeyEnum } from "./accesslevelfilterkeyenum";


// AccessLevelFilter
/** 
 * The access level to use to filter results.
**/
export class AccessLevelFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: AccessLevelFilterKeyEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
