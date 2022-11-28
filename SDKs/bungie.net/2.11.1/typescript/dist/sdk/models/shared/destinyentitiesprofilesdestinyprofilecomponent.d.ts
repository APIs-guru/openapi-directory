import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If you need to render the Profile (their platform name, icon, etc...) somewhere, this property contains that information.
**/
export declare class DestinyEntitiesProfilesDestinyProfileComponentUserInfo extends SpeakeasyBase {
    applicableMembershipTypes?: number[];
    crossSaveOverride?: number;
    displayName?: string;
    iconPath?: string;
    isPublic?: boolean;
    membershipId?: number;
    membershipType?: number;
    supplementalDisplayName?: string;
}
/**
 * The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
**/
export declare class DestinyEntitiesProfilesDestinyProfileComponent extends SpeakeasyBase {
    characterIds?: number[];
    currentSeasonHash?: number;
    currentSeasonRewardPowerCap?: number;
    dateLastPlayed?: Date;
    seasonHashes?: number[];
    userInfo?: DestinyEntitiesProfilesDestinyProfileComponentUserInfo;
    versionsOwned?: number;
}
