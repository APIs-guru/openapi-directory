import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantRoleEnum } from "./participantroleenum";
/**
 * For a call analytics job, an object that indicates the audio channel that belongs to the agent and the audio channel that belongs to the customer.
**/
export declare class ChannelDefinition extends SpeakeasyBase {
    channelId?: number;
    participantRole?: ParticipantRoleEnum;
}
