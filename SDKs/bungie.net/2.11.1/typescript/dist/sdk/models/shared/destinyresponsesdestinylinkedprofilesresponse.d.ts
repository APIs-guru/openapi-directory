import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyResponsesDestinyProfileUserInfoCard } from "./destinyresponsesdestinyprofileuserinfocard";
import { DestinyResponsesDestinyErrorProfile } from "./destinyresponsesdestinyerrorprofile";
/**
 * If the requested membership had a linked Bungie.Net membership ID, this is the basic information about that BNet account.
 * I know, Tetron; I know this is mixing UserServices concerns with DestinyServices concerns. But it's so damn convenient! https://www.youtube.com/watch?v=X5R-bB-gKVI
**/
export declare class DestinyResponsesDestinyLinkedProfilesResponseBnetMembership extends SpeakeasyBase {
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
 * I know what you seek. You seek linked accounts. Found them, you have.
 * This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
**/
export declare class DestinyResponsesDestinyLinkedProfilesResponse extends SpeakeasyBase {
    bnetMembership?: DestinyResponsesDestinyLinkedProfilesResponseBnetMembership;
    profiles?: DestinyResponsesDestinyProfileUserInfoCard[];
    profilesWithErrors?: DestinyResponsesDestinyErrorProfile[];
}
