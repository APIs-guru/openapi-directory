import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserCompact } from "./usercompact";
import { UserCompact } from "./usercompact";
import { CustomFieldCompact } from "./customfieldcompact";
import { TaskCompact } from "./taskcompact";
import { TaskCompact } from "./taskcompact";
import { TaskCompact } from "./taskcompact";
import { UserCompact } from "./usercompact";
import { Like } from "./like";
import { Like } from "./like";
import { StoryResponseDates } from "./storyresponsedates";
import { EnumOption } from "./enumoption";
import { EnumOption } from "./enumoption";
import { SectionCompact } from "./sectioncompact";
import { StoryResponseDates } from "./storyresponsedates";
import { EnumOption } from "./enumoption";
import { EnumOption } from "./enumoption";
import { SectionCompact } from "./sectioncompact";
import { Preview } from "./preview";
import { ProjectCompact } from "./projectcompact";
import { StoryCompact } from "./storycompact";
import { TagCompact } from "./tagcompact";
import { TaskCompact } from "./taskcompact";

export enum StoryResponseSourceEnum {
    Web = "web"
,    Email = "email"
,    Mobile = "mobile"
,    Api = "api"
,    Unknown = "unknown"
}

export enum StoryResponseStickerNameEnum {
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


export class StoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignee" })
  assignee?: UserCompact;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @Metadata({ data: "json, name=custom_field" })
  customField?: CustomFieldCompact;

  @Metadata({ data: "json, name=dependency" })
  dependency?: TaskCompact;

  @Metadata({ data: "json, name=duplicate_of" })
  duplicateOf?: TaskCompact;

  @Metadata({ data: "json, name=duplicated_from" })
  duplicatedFrom?: TaskCompact;

  @Metadata({ data: "json, name=follower" })
  follower?: UserCompact;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=hearted" })
  hearted?: boolean;

  @Metadata({ data: "json, name=hearts", elemType: shared.Like })
  hearts?: Like[];

  @Metadata({ data: "json, name=html_text" })
  htmlText?: string;

  @Metadata({ data: "json, name=is_edited" })
  isEdited?: boolean;

  @Metadata({ data: "json, name=is_pinned" })
  isPinned?: boolean;

  @Metadata({ data: "json, name=liked" })
  liked?: boolean;

  @Metadata({ data: "json, name=likes", elemType: shared.Like })
  likes?: Like[];

  @Metadata({ data: "json, name=new_approval_status" })
  newApprovalStatus?: string;

  @Metadata({ data: "json, name=new_dates" })
  newDates?: StoryResponseDates;

  @Metadata({ data: "json, name=new_enum_value" })
  newEnumValue?: EnumOption;

  @Metadata({ data: "json, name=new_multi_enum_values", elemType: shared.EnumOption })
  newMultiEnumValues?: EnumOption[];

  @Metadata({ data: "json, name=new_name" })
  newName?: string;

  @Metadata({ data: "json, name=new_number_value" })
  newNumberValue?: number;

  @Metadata({ data: "json, name=new_resource_subtype" })
  newResourceSubtype?: string;

  @Metadata({ data: "json, name=new_section" })
  newSection?: SectionCompact;

  @Metadata({ data: "json, name=new_text_value" })
  newTextValue?: string;

  @Metadata({ data: "json, name=num_hearts" })
  numHearts?: number;

  @Metadata({ data: "json, name=num_likes" })
  numLikes?: number;

  @Metadata({ data: "json, name=old_approval_status" })
  oldApprovalStatus?: string;

  @Metadata({ data: "json, name=old_dates" })
  oldDates?: StoryResponseDates;

  @Metadata({ data: "json, name=old_enum_value" })
  oldEnumValue?: EnumOption;

  @Metadata({ data: "json, name=old_multi_enum_values", elemType: shared.EnumOption })
  oldMultiEnumValues?: EnumOption[];

  @Metadata({ data: "json, name=old_name" })
  oldName?: string;

  @Metadata({ data: "json, name=old_number_value" })
  oldNumberValue?: number;

  @Metadata({ data: "json, name=old_resource_subtype" })
  oldResourceSubtype?: string;

  @Metadata({ data: "json, name=old_section" })
  oldSection?: SectionCompact;

  @Metadata({ data: "json, name=old_text_value" })
  oldTextValue?: string;

  @Metadata({ data: "json, name=previews", elemType: shared.Preview })
  previews?: Preview[];

  @Metadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=source" })
  source?: StoryResponseSourceEnum;

  @Metadata({ data: "json, name=sticker_name" })
  stickerName?: StoryResponseStickerNameEnum;

  @Metadata({ data: "json, name=story" })
  story?: StoryCompact;

  @Metadata({ data: "json, name=tag" })
  tag?: TagCompact;

  @Metadata({ data: "json, name=target" })
  target?: any;

  @Metadata({ data: "json, name=task" })
  task?: TaskCompact;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
