import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum StoryResponseSourceEnum {
    Web = "web",
    Email = "email",
    Mobile = "mobile",
    Api = "api",
    Unknown = "unknown"
}
export declare enum StoryResponseStickerNameEnum {
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
export declare class StoryResponse extends SpeakeasyBase {
    assignee?: UserCompact;
    createdAt?: Date;
    createdBy?: UserCompact;
    customField?: CustomFieldCompact;
    dependency?: TaskCompact;
    duplicateOf?: TaskCompact;
    duplicatedFrom?: TaskCompact;
    follower?: UserCompact;
    gid?: string;
    hearted?: boolean;
    hearts?: Like[];
    htmlText?: string;
    isEdited?: boolean;
    isPinned?: boolean;
    liked?: boolean;
    likes?: Like[];
    newApprovalStatus?: string;
    newDates?: StoryResponseDates;
    newEnumValue?: EnumOption;
    newMultiEnumValues?: EnumOption[];
    newName?: string;
    newNumberValue?: number;
    newResourceSubtype?: string;
    newSection?: SectionCompact;
    newTextValue?: string;
    numHearts?: number;
    numLikes?: number;
    oldApprovalStatus?: string;
    oldDates?: StoryResponseDates;
    oldEnumValue?: EnumOption;
    oldMultiEnumValues?: EnumOption[];
    oldName?: string;
    oldNumberValue?: number;
    oldResourceSubtype?: string;
    oldSection?: SectionCompact;
    oldTextValue?: string;
    previews?: Preview[];
    project?: ProjectCompact;
    resourceSubtype?: string;
    resourceType?: string;
    source?: StoryResponseSourceEnum;
    stickerName?: StoryResponseStickerNameEnum;
    story?: StoryCompact;
    tag?: TagCompact;
    target?: any;
    task?: TaskCompact;
    text?: string;
}
