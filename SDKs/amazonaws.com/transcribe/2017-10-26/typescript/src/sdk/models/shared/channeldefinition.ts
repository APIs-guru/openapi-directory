import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParticipantRoleEnum } from "./participantroleenum";



// ChannelDefinition
/** 
 * For a call analytics job, an object that indicates the audio channel that belongs to the agent and the audio channel that belongs to the customer.
**/
export class ChannelDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelId" })
  channelId?: number;

  @SpeakeasyMetadata({ data: "json, name=ParticipantRole" })
  participantRole?: ParticipantRoleEnum;
}
