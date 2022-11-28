import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
/**
 * This is the silver available on this Profile across any platforms on which they have purchased silver.
 *  This is only available if you are requesting yourself.
**/
export declare class DestinyResponsesDestinyProfileUserInfoCardPlatformSilver extends SpeakeasyBase {
    platformSilver?: Map<string, DestinyEntitiesItemsDestinyItemComponent>;
}
export declare class DestinyResponsesDestinyProfileUserInfoCard extends SpeakeasyBase {
    applicableMembershipTypes?: number[];
    crossSaveOverride?: number;
    dateLastPlayed?: Date;
    displayName?: string;
    iconPath?: string;
    isCrossSavePrimary?: boolean;
    isOverridden?: boolean;
    isPublic?: boolean;
    membershipId?: number;
    membershipType?: number;
    platformSilver?: DestinyResponsesDestinyProfileUserInfoCardPlatformSilver;
    supplementalDisplayName?: string;
    unpairedGameVersions?: number;
}
