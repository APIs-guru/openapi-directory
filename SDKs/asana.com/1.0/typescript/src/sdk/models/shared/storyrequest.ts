import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StoryRequestStickerNameEnum {
    GreenCheckmark = "green_checkmark"
,    PeopleDancing = "people_dancing"
,    DancingUnicorn = "dancing_unicorn"
,    Heart = "heart"
,    PartyPopper = "party_popper"
,    PeopleWavingFlags = "people_waving_flags"
,    SplashingNarwhal = "splashing_narwhal"
,    Trophy = "trophy"
,    YetiRidingUnicorn = "yeti_riding_unicorn"
,    CelebratingPeople = "celebrating_people"
,    DeterminedClimbers = "determined_climbers"
,    PhoenixSpreadingLove = "phoenix_spreading_love"
}


export class StoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=html_text" })
  htmlText?: string;

  @Metadata({ data: "json, name=is_pinned" })
  isPinned?: boolean;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=sticker_name" })
  stickerName?: StoryRequestStickerNameEnum;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
