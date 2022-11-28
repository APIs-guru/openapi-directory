import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupsV2GroupOptionalConversation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chatEnabled?: boolean;

  @SpeakeasyMetadata()
  chatName?: string;

  @SpeakeasyMetadata()
  chatSecurity?: number;

  @SpeakeasyMetadata()
  conversationId?: number;

  @SpeakeasyMetadata()
  groupId?: number;
}
