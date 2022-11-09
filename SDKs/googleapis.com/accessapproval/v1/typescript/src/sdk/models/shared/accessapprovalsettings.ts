import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnrolledService } from "./enrolledservice";


// AccessApprovalSettings
/** 
 * Settings on a Project/Folder/Organization related to Access Approval.
**/
export class AccessApprovalSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeKeyVersion" })
  activeKeyVersion?: string;

  @Metadata({ data: "json, name=ancestorHasActiveKeyVersion" })
  ancestorHasActiveKeyVersion?: boolean;

  @Metadata({ data: "json, name=enrolledAncestor" })
  enrolledAncestor?: boolean;

  @Metadata({ data: "json, name=enrolledServices", elemType: shared.EnrolledService })
  enrolledServices?: EnrolledService[];

  @Metadata({ data: "json, name=invalidKeyVersion" })
  invalidKeyVersion?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationEmails" })
  notificationEmails?: string[];
}
