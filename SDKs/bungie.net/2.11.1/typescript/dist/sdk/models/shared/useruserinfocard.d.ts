import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This contract supplies basic information commonly used to display a minimal amount of information about a user. Take care to not add more properties here unless the property applies in all (or at least the majority) of the situations where UserInfoCard is used. Avoid adding game specific or platform specific details here. In cases where UserInfoCard is a subset of the data needed in a contract, use UserInfoCard as a property of other contracts.
**/
export declare class UserUserInfoCard extends SpeakeasyBase {
    applicableMembershipTypes?: number[];
    crossSaveOverride?: number;
    displayName?: string;
    iconPath?: string;
    isPublic?: boolean;
    membershipId?: number;
    membershipType?: number;
    supplementalDisplayName?: string;
}
