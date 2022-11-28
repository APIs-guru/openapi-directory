import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrgUnit
/** 
 * Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.
**/
export class OrgUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockInheritance" })
  blockInheritance?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitPath" })
  orgUnitPath?: string;

  @SpeakeasyMetadata({ data: "json, name=parentOrgUnitId" })
  parentOrgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=parentOrgUnitPath" })
  parentOrgUnitPath?: string;
}
