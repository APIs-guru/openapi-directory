import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForwardingConfigStateEnum } from "./forwardingconfigstateenum";



// ForwardingConfig
/** 
 * The forwarding configuration for a given property.
**/
export class ForwardingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ForwardingConfigStateEnum;
}
