import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ForwardingConfigStateEnum } from "./forwardingconfigstateenum";


// ForwardingConfig
/** 
 * The forwarding configuration for a given property.
**/
export class ForwardingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state: ForwardingConfigStateEnum;
}
