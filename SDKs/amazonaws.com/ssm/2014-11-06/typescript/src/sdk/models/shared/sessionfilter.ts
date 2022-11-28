import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionFilterKeyEnum } from "./sessionfilterkeyenum";



// SessionFilter
/** 
 * Describes a filter for Session Manager information.
**/
export class SessionFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: SessionFilterKeyEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
