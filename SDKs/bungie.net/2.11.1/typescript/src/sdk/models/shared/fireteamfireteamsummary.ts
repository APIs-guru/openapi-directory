import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FireteamFireteamSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityType?: number;

  @SpeakeasyMetadata()
  alternateSlotCount?: number;

  @SpeakeasyMetadata()
  availableAlternateSlotCount?: number;

  @SpeakeasyMetadata()
  availablePlayerSlotCount?: number;

  @SpeakeasyMetadata()
  dateCreated?: Date;

  @SpeakeasyMetadata()
  dateModified?: Date;

  @SpeakeasyMetadata()
  datePlayerModified?: Date;

  @SpeakeasyMetadata()
  fireteamId?: number;

  @SpeakeasyMetadata()
  groupId?: number;

  @SpeakeasyMetadata()
  isImmediate?: boolean;

  @SpeakeasyMetadata()
  isPublic?: boolean;

  @SpeakeasyMetadata()
  isValid?: boolean;

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  ownerMembershipId?: number;

  @SpeakeasyMetadata()
  platform?: number;

  @SpeakeasyMetadata()
  playerSlotCount?: number;

  @SpeakeasyMetadata()
  scheduledTime?: Date;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  titleBeforeModeration?: string;
}
