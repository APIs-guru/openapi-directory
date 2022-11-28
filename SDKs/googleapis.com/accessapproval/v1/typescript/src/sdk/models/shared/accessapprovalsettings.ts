import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnrolledService } from "./enrolledservice";



// AccessApprovalSettings
/** 
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
export class AccessApprovalSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeKeyVersion" })
  activeKeyVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ancestorHasActiveKeyVersion" })
  ancestorHasActiveKeyVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enrolledAncestor" })
  enrolledAncestor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enrolledServices", elemType: EnrolledService })
  enrolledServices?: EnrolledService[];

  @SpeakeasyMetadata({ data: "json, name=invalidKeyVersion" })
  invalidKeyVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationEmails" })
  notificationEmails?: string[];
}


// AccessApprovalSettingsInput
/** 
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
export class AccessApprovalSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeKeyVersion" })
  activeKeyVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=enrolledServices", elemType: EnrolledService })
  enrolledServices?: EnrolledService[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationEmails" })
  notificationEmails?: string[];
}
