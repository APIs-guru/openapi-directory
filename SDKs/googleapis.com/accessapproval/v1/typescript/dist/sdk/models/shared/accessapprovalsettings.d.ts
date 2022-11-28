import { SpeakeasyBase } from "../../../internal/utils";
import { EnrolledService } from "./enrolledservice";
/**
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
export declare class AccessApprovalSettings extends SpeakeasyBase {
    activeKeyVersion?: string;
    ancestorHasActiveKeyVersion?: boolean;
    enrolledAncestor?: boolean;
    enrolledServices?: EnrolledService[];
    invalidKeyVersion?: boolean;
    name?: string;
    notificationEmails?: string[];
}
/**
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
export declare class AccessApprovalSettingsInput extends SpeakeasyBase {
    activeKeyVersion?: string;
    enrolledServices?: EnrolledService[];
    name?: string;
    notificationEmails?: string[];
}
