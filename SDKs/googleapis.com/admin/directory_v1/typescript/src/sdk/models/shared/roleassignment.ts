import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoleAssignment
/** 
 * Defines an assignment of a role.
**/
export class RoleAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedTo" })
  assignedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=roleAssignmentId" })
  roleAssignmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=scopeType" })
  scopeType?: string;
}
