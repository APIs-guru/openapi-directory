import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { CustomFieldCompact } from "./customfieldcompact";
import { TaskCompact } from "./taskcompact";
import { Like } from "./like";
import { StoryResponseDates } from "./storyresponsedates";
import { EnumOption } from "./enumoption";
import { SectionCompact } from "./sectioncompact";
import { Preview } from "./preview";
import { ProjectCompact } from "./projectcompact";
import { StoryCompact } from "./storycompact";
import { TagCompact } from "./tagcompact";


export enum StoryResponseSourceEnum {
    Web = "web",
    Email = "email",
    Mobile = "mobile",
    Api = "api",
    Unknown = "unknown"
}

export enum StoryResponseStickerNameEnum {
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


export class StoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignee" })
  assignee?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField?: CustomFieldCompact;

  @SpeakeasyMetadata({ data: "json, name=dependency" })
  dependency?: TaskCompact;

  @SpeakeasyMetadata({ data: "json, name=duplicate_of" })
  duplicateOf?: TaskCompact;

  @SpeakeasyMetadata({ data: "json, name=duplicated_from" })
  duplicatedFrom?: TaskCompact;

  @SpeakeasyMetadata({ data: "json, name=follower" })
  follower?: UserCompact;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=hearted" })
  hearted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hearts", elemType: Like })
  hearts?: Like[];

  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=is_edited" })
  isEdited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_pinned" })
  isPinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liked" })
  liked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=likes", elemType: Like })
  likes?: Like[];

  @SpeakeasyMetadata({ data: "json, name=new_approval_status" })
  newApprovalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=new_dates" })
  newDates?: StoryResponseDates;

  @SpeakeasyMetadata({ data: "json, name=new_enum_value" })
  newEnumValue?: EnumOption;

  @SpeakeasyMetadata({ data: "json, name=new_multi_enum_values", elemType: EnumOption })
  newMultiEnumValues?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=new_name" })
  newName?: string;

  @SpeakeasyMetadata({ data: "json, name=new_number_value" })
  newNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=new_resource_subtype" })
  newResourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=new_section" })
  newSection?: SectionCompact;

  @SpeakeasyMetadata({ data: "json, name=new_text_value" })
  newTextValue?: string;

  @SpeakeasyMetadata({ data: "json, name=num_hearts" })
  numHearts?: number;

  @SpeakeasyMetadata({ data: "json, name=num_likes" })
  numLikes?: number;

  @SpeakeasyMetadata({ data: "json, name=old_approval_status" })
  oldApprovalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=old_dates" })
  oldDates?: StoryResponseDates;

  @SpeakeasyMetadata({ data: "json, name=old_enum_value" })
  oldEnumValue?: EnumOption;

  @SpeakeasyMetadata({ data: "json, name=old_multi_enum_values", elemType: EnumOption })
  oldMultiEnumValues?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=old_name" })
  oldName?: string;

  @SpeakeasyMetadata({ data: "json, name=old_number_value" })
  oldNumberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=old_resource_subtype" })
  oldResourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=old_section" })
  oldSection?: SectionCompact;

  @SpeakeasyMetadata({ data: "json, name=old_text_value" })
  oldTextValue?: string;

  @SpeakeasyMetadata({ data: "json, name=previews", elemType: Preview })
  previews?: Preview[];

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: StoryResponseSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=sticker_name" })
  stickerName?: StoryResponseStickerNameEnum;

  @SpeakeasyMetadata({ data: "json, name=story" })
  story?: StoryCompact;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: TagCompact;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: any;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: TaskCompact;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
