import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelTargetInfo } from "./channeltargetinfo";
import { ContactTargetInfo } from "./contacttargetinfo";
/**
 * The contact or contact channel that's being engaged.
**/
export declare class Target extends SpeakeasyBase {
    channelTargetInfo?: ChannelTargetInfo;
    contactTargetInfo?: ContactTargetInfo;
}
