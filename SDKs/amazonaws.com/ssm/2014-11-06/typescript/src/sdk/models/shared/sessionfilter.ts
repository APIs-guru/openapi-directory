import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionFilterKeyEnum } from "./sessionfilterkeyenum";


// SessionFilter
/** 
 * Describes a filter for Session Manager information.
**/
export class SessionFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: SessionFilterKeyEnum;

  @Metadata({ data: "json, name=value" })
  value: string;
}
