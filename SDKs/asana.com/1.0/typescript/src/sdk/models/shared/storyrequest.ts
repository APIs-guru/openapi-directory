import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StoryRequestStickerNameEnum {
    GreenCheckmark = "green_checkmark",
    PeopleDancing = "people_dancing",
    DancingUnicorn = "dancing_unicorn",
    Heart = "heart",
    PartyPopper = "party_popper",
    PeopleWavingFlags = "people_waving_flags",
    SplashingNarwhal = "splashing_narwhal",
    Trophy = "trophy",
    YetiRidingUnicorn = "yeti_riding_unicorn",
    CelebratingPeople = "celebrating_people",
    DeterminedClimbers = "determined_climbers",
    PhoenixSpreadingLove = "phoenix_spreading_love"
}


export class StoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=is_pinned" })
  isPinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sticker_name" })
  stickerName?: StoryRequestStickerNameEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
