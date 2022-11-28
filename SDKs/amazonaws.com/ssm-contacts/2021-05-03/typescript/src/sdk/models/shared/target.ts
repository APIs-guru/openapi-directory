import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelTargetInfo } from "./channeltargetinfo";
import { ContactTargetInfo } from "./contacttargetinfo";



// Target
/** 
 * The contact or contact channel that's being engaged.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelTargetInfo" })
  channelTargetInfo?: ChannelTargetInfo;

  @SpeakeasyMetadata({ data: "json, name=ContactTargetInfo" })
  contactTargetInfo?: ContactTargetInfo;
}
