import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic info about the account that failed. Don't expect anything other than membership ID, Membership Type, and displayName to be populated.
**/
export declare class DestinyResponsesDestinyErrorProfileInfoCard extends SpeakeasyBase {
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
 * If a Destiny Profile can't be returned, but we're pretty certain it's a valid Destiny account, this will contain as much info as we can get about the profile for your use.
 * Assume that the most you'll get is the Error Code, the Membership Type and the Membership ID.
**/
export declare class DestinyResponsesDestinyErrorProfile extends SpeakeasyBase {
    errorCode?: number;
    infoCard?: DestinyResponsesDestinyErrorProfileInfoCard;
}
