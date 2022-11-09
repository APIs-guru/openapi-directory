import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrgUnit
/** 
 * Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
**/
export class OrgUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockInheritance" })
  blockInheritance?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @Metadata({ data: "json, name=parentOrgUnitId" })
  parentOrgUnitId?: string;

  @Metadata({ data: "json, name=parentOrgUnitPath" })
  parentOrgUnitPath?: string;
}
