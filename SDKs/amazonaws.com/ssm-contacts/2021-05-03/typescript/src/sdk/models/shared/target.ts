import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelTargetInfo } from "./channeltargetinfo";
import { ContactTargetInfo } from "./contacttargetinfo";


// Target
/** 
 * The contact or contact channel that's being engaged.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelTargetInfo" })
  channelTargetInfo?: ChannelTargetInfo;

  @Metadata({ data: "json, name=ContactTargetInfo" })
  contactTargetInfo?: ContactTargetInfo;
}
